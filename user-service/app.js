const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();


app.use('/', userRoutes);

module.exports = app;