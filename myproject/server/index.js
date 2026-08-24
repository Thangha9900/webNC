const express = require('express');
const cors = require('cors');
const { testFunc, testFunc3, divide } = require('./testFunc');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello from the server! 123123123',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});