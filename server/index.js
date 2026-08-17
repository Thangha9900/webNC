const express = require('express');
const { testFunc, testFunc3, divide } = require('./testFunc');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello from the server!',
        result: testFunc(3, 4)
      
    });
});