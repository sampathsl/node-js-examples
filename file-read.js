function readFile(fileName, cb) {
    return fs.readFile(fileName,'utf-8', function(error, contents) {
        if(error)
        {
            cb(error);
        }
        else
        {
            setTimeout(function(){
                cb(null, contents);
            }, 5000);
        }
    });
}

var fs = require("fs");

module.exports.readFile = readFile;