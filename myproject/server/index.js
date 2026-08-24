const express = require('express');
const cors = require('cors');
const { testFunc, testFunc3, divide } = require('./testFunc');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
app.get(['/', '/api/get'], (req, res) => {
=======
app.get('/api/data', (req, res) => {
>>>>>>> 607d3f0071e1c96a12ffb4d3e42d576d7f4b0255
    res.json({
        message: 'Hello from the server! 123123123',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});