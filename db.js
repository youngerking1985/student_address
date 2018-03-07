/**
 * Created by xy on 2015/9/2.
 */
var mysql = require('mysql');
var log = require('log4js').getLogger('db');

var mysqlOptions = {
    host    : "39.106.203.163",
    user    : "wyh",//todo: product need modify, visys or visys_dev
    password: "test"//todo:product need modify,
};

//storeDB connect to mysql
var connection = mysql.createConnection(mysqlOptions);
connection.connect(function (err) {
    if (err) {
        log.error('error connecting to mysql db: ' + err.stack);
        return;
    }

    log.info('mysql db connected as id ' + connection.threadId);
});

exports.connection = connection;
