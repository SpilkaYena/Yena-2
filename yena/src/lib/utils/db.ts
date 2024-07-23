const {Pool} = require('pg');

const pool = new Pool({
    user: 'юзер йоу',
    host: 'локалхост йоу',
    database: process.env.NEXT_PUBLIC_DB_NAME,
    password: 'пароль йоу',
    port: 5252,
});

async function query(text, params) {
    const {rows} = await pool.query(text, params);
    return rows;
}

module.exports = {
    query,
};
