const mongooose = require('mongoose');
// const router = express.Router();
var dbUrl = 'mongodb://admin:admin123@ds255539.mlab.com:55539/workdb';
mongooose.connect(dbUrl, (err) => {
    if(!err) {
        console.log('MongoDB connection succeeded.');
    }
    else {
        console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongooose;
// module.exports = router;