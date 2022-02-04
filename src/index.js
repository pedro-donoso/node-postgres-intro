// DEFINO CONSTANTES REQUERIDAS
const express = require('express');
const app = express();

// DEFINO MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DEFINO LAS RUTAS
app.use(require('./routes/index'));

app.listen(4000);
console.log('Server on port 4000');

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

const deleteUser = async () => {
    const text = 'DELETE FROM users WHERE username = $1';
    const value = ['john'];

    const res = await pool.query(text, value);
    console.log(res);
}

// deleteUser();

const editUser = async () => {
    const text = 'UPDATE users SET username = $1, password= $2 WHERE username = $3';
     const values = ['Bruce', 'bruce123', 'John'];

     const res = await pool.query(text, values);
    console.log(res); }

 editUser();





