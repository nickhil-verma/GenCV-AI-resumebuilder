const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

// Allow CORS from specific origin
app.use(cors({
    origin: 'https://gen-cv-ai-resumebuilder-frontend.vercel.app',
    credentials: true // if you're using cookies, sessions, or auth headers
}));

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('world!');
});

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
