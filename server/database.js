const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env'), quiet: true });

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: {
        ca: fs.readFileSync(path.join(__dirname, 'ca.pem')),
        rejectUnauthorized: true
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to Aiven MySQL... Connection ID: ' + connection.threadId);
});


const query = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}
//todo: add commit to close the transaction after the update query is executed
const commitQuery = () => {
    return new Promise((resolve, reject) => {
        query(sql).commit((error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

// Export the functions
module.exports = {
    connection,
    query,
    commitQuery

};