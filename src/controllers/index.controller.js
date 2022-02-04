const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
   const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.send('users');
}

module.exports = {
    getUsers
}