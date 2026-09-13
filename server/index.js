const express = require('express');

const { testFunc, testFunc3, divide } = require('./testFunc');

//const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3399;



const { connection, query, commitQuery } = require('./database');

//const { connection, establishConnection, query, commitQuery, endConnection } = require('./localdb');

const mysql = require('mysql2');

const { sql, update } = require('./query');





const fs = require('fs'); //file system module to read the CA certificate





//app.use(cors());

//app.use(express.json());

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});

app.get('/api/data', (req, res) => {

    res.json({

        message: 'Hello from the server!',

        result: testFunc(5, 3), result3: testFunc3(5, 3), divide: divide(10, 2)

    });

});



app.get('/api/get', (req, res) => {

    res.json({ message: 'This is a GET request!' });

});



app.post('/api/post', (req, res) => {

    res.json({ message: 'This is a POST request!' });

});

app.get('/api/localdb', (req, res) => {

    query(sql).then(results => {

        res.json({ query: results });

    }).catch(error => {

        console.error('Query error: ' + error.stack);

        res.status(500).json({ error: 'Database query failed' });

    });

});

app.get('/api/students', async (req, res) => {
    try {
        const results = await query('SELECT * FROM STUDENT LIMIT 10');
        res.json(results);
    } catch (error) {
        console.error('Query error: ' + error.stack);
        res.status(500).json({ error: 'Database query failed' });
    }
});

app.get('/api/dbconn', (req, res) => {

    query(sql).then(results => {

        res.json({ query: results });

    }).catch(error => {

        console.error('Query error: ' + error.stack);

        res.status(500).json({ error: 'Database query failed' });

    });

});

app.get('/api/update', (req, res) => {


    query(update).then(results => {

        res.json({ update: results });

    }).catch(error => {

        console.error('Query error: ' + error.stack);

        res.status(500).json({ error: 'Database query failed' });

    });

});