const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');
// for viewing all db data
router.get('/', (req,res) => {
    Employee.find((err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log('Error in Retrieving WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
// for passing id and displaying db data
router.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    Employee.findById(req.params.id, (err,doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Retrieving WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
// to display db data
router.post('/', (req,res) => {
    var emp = new Employee({
        // uname: req.body.uname,
        pname: req.body.pname,
        role: req.body.role,
        // password: req.body.password,
        // joinDate: req.body.joinDate
        // visitDate: req.body.visitDate,
        visitDetails: req.body.visitDetails,
        doctorName: req.body.doctorName

    });
    emp.save((err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log('Error in Saving WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// to update db data
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    var emp = {
        // uname: req.body.uname,
        pname:req.body.pname,
        role: req.body.role,
        // password: req.body.password,
        // joinDate: req.body.joinDate
        // visitDate: req.body.visitDate,
        visitDetails: req.body.visitDetails,
        doctorName: req.body.doctorName
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp},  {new: true}, (err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log('Error in Updating WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});


//delete from db

router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log('Error in Deleting WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;