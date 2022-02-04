const { Pool } = require('pg');

const config = {
     user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'library'
}

const pool = new Pool(config);

const getBooks = async () => {
    try {
        const res = await pool.query('select * from users');
        console.log(res.rows);
        pool.end();
    } catch(e) {
        console.log(e);
    }
};

const insertUser = async () => {
   try {
        const text = 'INSERT INTO users(username, password) VALUES ($1, $2)'
        const values = ['jhon', 'john1234']

        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
   } catch (e) {
       console.log(e);
   }
}

insertUser();
