'use strict';

const Record = require("../model/appModel");

//let Record = require('../model/appModel.js');
//let ClaimedRecord = require('../model/appModel.js');

exports.list_all_records = function (req, res) {
    Record.getAllRecords(function (err, record) {
        console.log('controller')
        if(err) res.send(err);
        console.log('res', record);
        res.send(record);
    });
};

exports.create_a_record = function (req, res) {
    let new_record = new Record(req.body);
    // handles null error
    if (!new_record.item || !new_record.description || !new_record.location || !new_record.location_description || !new_record.date || !new_record.adminID || !new_record.witness || !new_record.auID || !new_record.phone) {
        res.status(404).send({error: true, message: 'Please provide full information'});
    } else {
        Record.createRecord(new_record, function (err, record) {
            if(err) res.send(err);
            res.json(record);
        });
    }
};

exports.read_a_record = function (req, res) {

    Record.getRecordById(req.params.recordId, function (err, record) {
        if(err) res.send(err);
        res.json(record);
    });
};

exports.update_a_record = function (req, res) {
    let new_record = new Record(req.body);

    if (!new_record.item || !new_record.description || !new_record.location || !new_record.location_description || !new_record.date || !new_record.adminID || !new_record.witness || !new_record.auID || !new_record.phone) {
        res.status(404).send({error: true, message: 'Please update full information'});
    } else {
        Record.updateById(req.params.recordId, new Record(req.body), function (err, record) {
            if(err) res.send(err);
            res.json(record);
        });
    }
};

exports.delete_a_record = function (req, res) {
    Record.remove(req.params.recordId, function (err, record) {
        if(err) res.send(err);
        res.json({message: 'Record successfully deleted'});
    });
};

