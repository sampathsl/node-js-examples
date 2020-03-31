function say(filaName) {
    return fs.readFileSync(filaName);
}

var fs = require("fs");

module.export.say = say;