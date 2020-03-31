function readFile(fileName, cb) {
    var asq = ASQ();
    return fs.readFile( fileName, asq.errfcb() );
}

function delayMsg(done, content) {
    setTimeout(function() {
        done(content);
    }, 1000);
}

function setFile(fileName) {
    return readFile(fileName)
    .delay(delayMsg);
}

var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.readFile = readFile;