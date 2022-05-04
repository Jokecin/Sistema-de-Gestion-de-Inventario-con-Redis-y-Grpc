const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./example.proto";
const items = require("./data.json");
const pool = require("../../src/databasepg");



const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const itemProto = grpc.loadPackageDefinition(packageDefinition);

 pool.connect(); 

const server = () => {
  const server = new grpc.Server();
  server.addService(itemProto.ItemService.service, {
    getItem: (_, callback) => {
      const itemName = _.request.name;  

      async function keris(){
  //  console.log(itemName);  
      const item =   await pool.query(`select name from items where items.name ilike '%${itemName}%'`)  //query
      callback(null, { items: item.rows});
   //`select name from items where items.name ilike '%${itemName}%'`
      } 
      keris(); 
    }
  });
  
  server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err != null) console.log(err);
    else {
      console.log("GRPC SERVER RUN AT http://localhost:50051");
      server.start();
    }
  });
};

/*
pool.query(`select * from items`,(err,res)=>{
  if(!err){
      console.log(res.rows);
      
  }else{
  console.log(err.message);
  }
})  
*/
exports.server = server;