var express = require('express');
var app = express();
var router = express.Router();
var pg = require('pg');
const { Pool } = pg;

app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'postgres-database-db-1',
  database: 'my_postgres',
  password: 'mysecretpassword',
  port: 5432,
});

const timeLog = (request, response, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

router.get('/now', async (request, response) => {
  try {
    console.log('now has been polled');
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
