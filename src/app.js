
const express = require('express');
const app = express();


// Routes
const taskRouter = require('./routes/tasks');
app.use('/tasks',taskRouter)

module.exports = app;