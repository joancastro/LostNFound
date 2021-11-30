'use strict';

const ClaimedRecord = require("../model/appModel2");

exports.list_all_claimedRecords = function (req, res) {
    ClaimedRecord.getAllClaimedRecords(function (err, record) {
        console.log('controller')
        if(err) res.send(err);
        console.log('res', record);
        res.send(record);
    });
};

exports.create_a_claimedRecord = function (req, res) {
    let new_record = new ClaimedRecord(req.body);
    // handles null error
    if (!new_record.item || !new_record.description || !new_record.location || !new_record.location_description || !new_record.date || !new_record.adminID || !new_record.witness || !new_record.auID || !new_record.phone || !new_record.claimName || !new_record.claimAUID || !new_record.claimPhone) {
        res.status(404).send({error: true, message: 'Please provide full information'});
    } else {
        ClaimedRecord.createClaimedRecord(new_record, function (err, record) {
            if(err) res.send(err);
            res.json(record);
        });
    }
};

exports.read_a_claimedRecord = function (req, res) {
    ClaimedRecord.getClaimedRecordById(req.params.recordId, function (err, record) {
        if(err) res.send(err);
        res.json(record);
    });
};

exports.update_a_claimedRecord = function (req, res) {
    let new_record = new ClaimedRecord(req.body);

    if (!new_record.item || !new_record.description || !new_record.location || !new_record.location_description || !new_record.date || !new_record.adminID || !new_record.witness || !new_record.auID || !new_record.phone || !new_record.claimName || !new_record.claimAUID || !new_record.claimPhone) {
        res.status(404).send({error: true, message: 'Please update full information'});
    } else {
        ClaimedRecord.updateById(req.params.recordId, new ClaimedRecord(req.body), function (err, record) {
            if(err) res.send(err);
            res.json(record);
        });
    }
};

exports.delete_a_claimedRecord = function (req, res) {
    ClaimedRecord.remove(req.params.recordId, function (err, record) {
        if(err) res.send(err);
        res.json({message: 'Record successfully deleted'});
    });
};