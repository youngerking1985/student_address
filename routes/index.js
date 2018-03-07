var express = require('express');
var router = express.Router();
var message = require('../message');
var connection         = require('../db').connection;
var log                = require('log4js').getLogger('/index.js');
var tableName = "hnsd.address_list";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '请访问index.html' });
});

router.get('/students', function(req, res, next) {
    var sql = ("SELECT * FROM {0}").format(tableName);
    log.trace('get students: sql' + sql);
    connection.query(sql, function (err, rows) {
        if (err) return callback({message: 'Package.getRelateShips: search to db is error' + err});

        var students = {"test":rows}.test;
        var ret = {
          "data":students
        };
        message.sendSuccess(res, log, ret);
    });
});

router.post('/students/:id/info', function(req, res, next) {
    var params = {
        id: req.query.id,
        name   : req.query.name || '""',
        sid: req.query.sid || '""',
        department: req.query.department || '""',
        post  : req.query.post || '""',
        phone: req.query.phone || '""',
        qq     : req.query.qq || '""', // 0-sort by fields, 1-by downCount, 2-by date, 3-by size
        remark    : req.query.remark || '""'
    };

    if(params.id === "")
        return message.sendSuccess(res, log, "false");

    var sql = "UPDATE {0} SET name = {1}, sid = {2}, department = {3}, post = {4}, phone = {5}, qq = {6}, remark = {7} WHERE id = {8} ".format(
        tableName, params.name, params.sid, params.department, params.post, params.phone, params.qq, params.remark, params.id
    );
    log.trace("update student: " + sql);
    connection.query(sql, function (err, rows) {
        if (err) return message.sendSuccess(res, log, "false");

        message.sendSuccess(res, log, "true");
    });
});


module.exports = router;
