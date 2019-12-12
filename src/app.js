
const express = require('express');
const app = express();

// Middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');
// Routes
const deliverykRouter = require('./routes/deliveries');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json())
app.use('/api/deliveries',deliverykRouter)
app.use(notFound);


module.exports = app;