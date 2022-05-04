const {Pool} = require('pg');

const pool = new Pool({
    user: "soyadmin",
    password:'111',
    host: "localhost",
    port: 5432,
    database: "db_tarea1"
});
 pool.connect();


module.exports = pool;