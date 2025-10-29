var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var pg = require('pg');
const { Pool } = pg;
//const client = await new Client({
//  user: 'postgres',
//  host: 'postgres-database-db-1',
//  database: 'my_postgres',
//  password: 'mysecretpassword',
//  port: 5432,
//}).connect();
//async function connectToPostgres() {
//  const client = new Client({
//    user: 'postgres',
//    host: 'postgres-database-db-1',
//    database: 'my_postgres',
//    password: 'mysecretpassword',
//    port: 5432,
//  });
  
//  console.log('connection attempt to PostgreSQL');

//  try {
//    await client.connect();
//    console.log('connected to PostgreSQL');
//  } catch (err) {
//    console.error('Error connecting to PostgreSQL:', err);
//  }
//}

//connectToPostgres();

app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'postgres-database-db-1',
  database: 'my_postgres',
  password: 'mysecretpassword',
  port: 5432,
});

//app.listen(port, () => {
//  console.log('Listening on port:', port);
//});

const timeLog = (request, response, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

//async function disconnectFromPostgres() {
//  try {
//    await client.end();
//  } catch (err) {
//    console.error('Error disconnecting from PostgreSQL:', err);
//  }
//}

router.get('/connect', async (request, response) => {
  try {
    //connectToPostgres();
    console.log('connect has been polled');
    //console.log('client ?:', (typeof(client) !== 'undefined' && client !== null));
    const nowTime = await pool.query('SELECT NOW()'); 
    response.status(200).json(nowTime.rows[0].now);
  } catch (err) {
    response.status(500).json(err)
  }
});

router.get('/disconnect', async (request, response) => {
  try {
    await pool.end();
    response.status(200).json('Connection closed');
  } catch (err) {
    response.status(500).json(err);
  }
});

module.exports = router;
