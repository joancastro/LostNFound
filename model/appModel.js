'use strict';
const sql = require('./db.js');

//Record object constructor
let Record = function(record) {
    this.item = record.item;
    this.description = record.description;
    this.location = record.location;
    this.location_description = record.location_description;
    this.date = record.date;
    this.adminID = record.adminID;
    this.witness = record.witness;
    this.auID = record.auID;
    this.phone = record.phone;
};

Record.createRecord = function (newRecord, result) {
    sql.query("INSERT INTO records set ?", newRecord, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Record.getAllRecords = function (result) {
    sql.query("Select * from records", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            console.log('records : ', res);
            result(null, res);
        }
    });
};

Record.getRecordById = function (recordId, result) {
    sql.query("Select id, item, description, location, location_description, date, adminID, witness, auID, phone from records where id = ? ", recordId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else {
            result(null, res);
        }
    });
};

Record.updateById = function (id, record, result) {
    sql.query("UPDATE records SET item = ?, description = ?, location = ?, location_description = ?,  date = ?, adminID = ?, witness = ?, auID = ?, phone = ? WHERE id = ?", [record.item, record.description, record.location, record.location_description, record.date, record.adminID, record.witness, record.auID, record.phone, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};

Record.remove = function (id, result) {
    sql.query("DELETE FROM records WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};


module.exports = Record;

//exports.Record = Record;
//exports.ClaimedRecord = ClaimedRecord;
