const express = require('express');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/inventory/search", (req, res) => {
    const sess = req.session;
    
    
});



app.listen(3000, () => {
    console.log("Server started at port 3000");
});