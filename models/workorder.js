const mongoose = require('mongoose');

var Workorder = mongoose.model('Workorder', {
    // uname: {type: String },
    pname: { type: String },
    // role: { type: String },
    // password: { type: String },
    // joinDate: {type: String}
    // visitDate: { type: String },
    
    doctorName: { type: String },
    visitDetails: { type: String }
});

module.exports = {
    Workorder
};