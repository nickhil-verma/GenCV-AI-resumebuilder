const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');

// ✅ Allow all origins
app.use(cors());

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('world!');
});

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

module.exports = app;
module.exports.handler = serverless(app);
