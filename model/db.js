'use strict';
let mysql = require('mysql');
//local mysql db connection
let connection = mysql.createConnection({
    host: '45.55.136.114',
    user: 'JRLS2021',
    password: 'th1sn0tpw!',
    database: 'JRLS2021'
});

connection.connect(function (err) {
    if(err) throw err;
});

module.exports = connection;
