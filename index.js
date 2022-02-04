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
        const res = await pool.query('select * from books');
        console.log(res.rows);
        pool.end();
    } catch(e) {
        console.log(e);
    }
};
getBooks();