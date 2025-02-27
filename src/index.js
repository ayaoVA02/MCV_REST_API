const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const Port = process.env.PORT;
const starterRoute = require('./routes/starterRoute');

app.use('/api/v1', starterRoute);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(Port, () => {
    console.log('Example app listening on port 8000!');
});