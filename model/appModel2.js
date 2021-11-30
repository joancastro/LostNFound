'use strict';
const sql = require('./db.js');

let ClaimedRecord = function(claimedRecord) {
    this.item = claimedRecord.item;
    this.description = claimedRecord.description;
    this.location = claimedRecord.location;
    this.location_description = claimedRecord.location_description;
    this.date = claimedRecord.date;
    this.adminID = claimedRecord.adminID;
    this.witness = claimedRecord.witness;
    this.auID = claimedRecord.auID;
    this.phone = claimedRecord.phone;
    this.claimName = claimedRecord.claimName;
    this.claimAUID = claimedRecord.claimAUID;
    this.claimPhone = claimedRecord.claimPhone;
};

ClaimedRecord.createClaimedRecord = function (newRecord, result) {
    sql.query("INSERT INTO claimedRecords set ?", newRecord, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

ClaimedRecord.getAllClaimedRecords = function (result) {
    sql.query("Select * from claimedRecords", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            console.log('records : ', res);
            result(null, res);
        }
    });
};

ClaimedRecord.getClaimedRecordById = function (recordId, result) {
    sql.query("Select id, item, description, location, location_description, date, adminID, witness, auID, phone, claimName, claimAUID, claimPhone from claimedRecords where id = ? ", recordId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else {
            result(null, res);
        }
    });
};

ClaimedRecord.updateById = function (id, claimedRecord, result) {
    sql.query("UPDATE claimedRecords SET item = ?, description = ?, location = ?, location_description = ?,  date = ?, adminID = ?, witness = ?, auID = ?, phone = ?, claimName = ?, claimAUID = ?, claimPhone = ? WHERE id = ?", [claimedRecord.item, claimedRecord.description, claimedRecord.location, claimedRecord.location_description, claimedRecord.date, claimedRecord.adminID, claimedRecord.witness, claimedRecord.auID, claimedRecord.phone, claimedRecord.claimName, claimedRecord.claimAUID, claimedRecord.claimPhone, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};

ClaimedRecord.remove = function (id, result) {
    sql.query("DELETE FROM claimedRecords WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};

module.exports = ClaimedRecord;