const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect();

const viewDepartments = async () => {
    const res = await client.query('SELECT * FROM department');
    console.table(res.rows);
};

const viewRoles = async () => {
    const res = await client.query('SELECT * FROM role');
    console.table(res.rows);
};

const viewEmployees = async () => {
    const res = await client.query('SELECT * FROM employee');
    console.table(res.rows);
};

module.exports = { viewDepartments, viewRoles, viewEmployees };