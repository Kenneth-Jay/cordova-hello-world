var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    cordova.exec(success, error, 'helloworld', 'coolMethod', [arg0]);
};

