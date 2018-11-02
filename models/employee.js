const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    // uname: {type: String },
    pname: { type: String },
    role: { type: String },
    // password: { type: String },
    // joinDate: {type: String}
    // visitDate: { type: String },
    visitDetails: { type: String },
    doctorName: { type: String }
});

module.exports = {
    Employee
};