const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Workorder } = require('../models/workorder');
// for viewing all db data
router.get('/', (req,res) => {
    Workorder.find((err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log('Error in Pulling WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
// for passing id and displaying db data
router.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No workorder with given id: ${req.params.id}`);
    }
    Workorder.findById(req.params.id, (err,doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Pulling WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
// to display db data
router.post('/', (req,res) => {
    var wo = new Workorder({
        // uname: req.body.uname,
        pname: req.body.pname,
        // role: req.body.role,
        // password: req.body.password,
        // joinDate: req.body.joinDate
        // visitDate: req.body.visitDate,
        doctorName: req.body.doctorName,
        visitDetails: req.body.visitDetails
       

    });
    wo.save((err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log('Error in Storing WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// to update db data
router.put('/', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No workorder with given id: ${req.params.id}`);
    }
    var wo = {
        // uname: req.body.uname,
        pname:req.body.pname,
        // role: req.body.role,
        // password: req.body.password,
        // joinDate: req.body.joinDate
        // visitDate: req.body.visitDate,
        doctorName: req.body.doctorName,
        visitDetails: req.body.visitDetails
       
    };
    Workorder.updateMany(req.params.id, { $set: wo},  {new: true}, (err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log('Error in Editing WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});


//delete from db

router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No workorder with given id: ${req.params.id}`);
    }
    Workorder.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log('Error in Removing WorkOrder: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;