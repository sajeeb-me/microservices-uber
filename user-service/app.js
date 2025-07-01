const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');

const app = express();
dotenv.config();
app.use(cookieParser());

app.use('/', userRoutes);

module.exports = app;