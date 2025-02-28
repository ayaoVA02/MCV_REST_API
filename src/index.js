const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/connectdb')

dotenv.config({ path: './.env' });
const Port = process.env.PORT;
const starterRoute = require('./routes/starterRoute');

app.use('/api/v1', starterRoute);


connectDB();
app.listen(Port, () => {
    console.log('Example app listening on port 8000!');
});