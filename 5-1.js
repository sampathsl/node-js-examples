function readFile(fileName, cb) {
    return fs.readFile(fileName,'utf-8', function(error, contents) {
        if(error)
        {
            cb(error);
        }
        else
        {
            setTimeout(function() {
                cb(null, contents);
            }, 5000);
        }
    });
}

function delayMsg(done, content) {
    setTimeout(function() {
        done(content);
    }, 1000);
}

function say(fileName) {
    return readFile(fileName)
    .delay(delayMsg);
}

var fs = require("fs");
var ASQ = require("asynquence");
var ASQCON = require("asynquence-contrib");

module.exports.readFile = readFile;