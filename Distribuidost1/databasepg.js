const {Pool} = require('pg');

const pool = new Pool({
    user: "soyadmin",
    password:'111',
    host: process.env.IP_DB,
    port: 5432,
    database: "db_tarea1"
});
 pool.connect();


module.exports = pool;