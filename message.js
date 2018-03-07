/**
 * Created by xy on 2015/9/1.
 */

/**
 * send message to user format
 * @param res
 * @param statusCode: default 's000000'
 * @param message: defined by router
 */
function sendMessage(res, statusCode, message) {
    res.status       = res.status || '200';
    var error        = message || {};
    error.statusCode = message.statusCode || statusCode || 's000000';

    console.log("sendMessage", error);
    res.json(error);
}

exports.sendSuccess = function (res, log, msg) {
    log.debug(msg);
    res.status = '200';
    sendMessage(res, msg.statusCode || 's000000', msg);
};

exports.sendClientError = function (res, log, err) {
    log.info('sendClientError' + err);
    res.status     = '400';
    err.statusCode = err.statusCode || this.statusCode.clientError;
    sendMessage(res, err.statusCode, err);
};

exports.sendServerError = function (res, log, err) {
    log.error(err);
    res.status     = '500';
    err.statusCode = err.statusCode || this.statusCode.serverError;
    sendMessage(res, err.statusCode, err);
};

exports.serverErrorTemplates = function (msg) {
    return {
        message   : msg,
        statusCode: statusCode.serverError
    }
};

var statusCode = {
    success                            : 's000000',
    failure                    : 's000001'
};

exports.sendMessage = sendMessage;
exports.statusCode  = statusCode;
