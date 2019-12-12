
const express = require('express');
const app = express();

// Middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');
// Routes
const taskRouter = require('./routes/tasks');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use('/tasks',taskRouter)
app.use(notFound);

module.exports = app;