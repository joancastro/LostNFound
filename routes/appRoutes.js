'use strict';
module.exports = function (app) {
    let todoList = require('../controller/appController');

    // todoList Routes
    app.route('/records')
        .get(todoList.list_all_records)
        .post(todoList.create_a_record);

    app.route('/records/:recordId')
        .get(todoList.read_a_record)
        .put(todoList.update_a_record)
        .delete(todoList.delete_a_record);
};
