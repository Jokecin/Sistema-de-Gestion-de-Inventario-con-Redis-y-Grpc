const express = require("express");
const app = express();
const pool = require("./databasepg");
/*
app.get("/", (req, res) => {
    res.send("asdaasdasdadasdasdsdasd");
  });*/
  pool.connect();

  pool.query(`select * from items`,(err,res)=>{
      if(!err){
          console.log(res.rows);
          
      }else{
      console.log(err.message);
      }
  })  

  app.listen(3000);

//5432 port postgresnpm