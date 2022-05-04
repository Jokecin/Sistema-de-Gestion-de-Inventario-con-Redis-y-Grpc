const express = require("express");
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const cors = require("cors");
const grpc = require("./grpc_client");
const server = require("./grpc_server");

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,   
  port: 6379
});

redisClient.on("error", function(error) {
  console.error(error);
});


app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 1000
  }
}));

//app.get('/inventory/search', search);


app.get("/inventory/search", async (req, res) => {
  const item = req.query.name;
  await redisClient.get(item,(err,items) => { 
  if(items!=null){
    console.log('me quiero suicidar')
    res.send(JSON.parse(items));
  }else{
    console.log('denunciado papu lince no esta en cache')
      guardar();// kkkkkkkkkkkkkkkkkkkkkk
    
  }
});

async function guardar (){//kkkkkkkkkkkkkkkkkkkkk
  if (item){
    

    grpc.GetItem({name: item}, async (error, items) => {

        if (error){
            console.log(error);
            res.json({});
        }else{res.json(items);
        }await redisClient.set(item, JSON.stringify(items));
    });
  }  
}
  
});

server.server();

app.listen(port, () => {
  console.log(`API RUN AT http://localhost:${port}`);
});
