const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var workorderController = require('./controllers/workorderController.js');
const path = require('path');

res.setHeader('Access-Control-Allow-Origin', 'https://work2.herokuapp.com/')
var app = express();
app.use(express.static(__dirname+'/dist/ngApp3'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/ngApp3/index.html'));
});
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(PORT, () => console.log('Server started at: ' + PORT));

app.use('/employees', employeeController);
app.use('/workorders', workorderController);
app.listen(process.env.PORT || 8080);