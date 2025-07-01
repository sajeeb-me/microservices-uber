const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const connectDB = require('./db/db'); // Assuming you have a db config file

const app = express();
dotenv.config();
app.use(cookieParser());

connectDB();

app.use('/', userRoutes);

module.exports = app;