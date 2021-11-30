'use strict';
module.exports = function (app) {
    let todoList = require('../controller/appController2');

    app.route('/claimedRecords')
        .get(todoList.list_all_claimedRecords)
        .post(todoList.create_a_claimedRecord);

    app.route('/claimedRecords/:recordId')
        .get(todoList.read_a_claimedRecord)
        .put(todoList.update_a_claimedRecord)
        .delete(todoList.delete_a_claimedRecord);
};

