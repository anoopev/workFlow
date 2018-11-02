const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var workorderController = require('./controllers/workorderController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(PORT, () => console.log('Server started at: ' + PORT));

app.use('/employees', employeeController);
app.use('/workorders', workorderController)