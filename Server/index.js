const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');

//database connection

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database Not Connected', err))

//port


const app = express();

app.use(express.json())

app.use('/', require('./Routes/authRoute'));

const port = 8000;
app.listen(port, () => console.log('Server is running on port' + ' ' + `${port}`));