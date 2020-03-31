
function printHelp() {
    console.log("usage:");
    console.log("--help Print the help");
    console.log("--file say hello to {FILE}");
    console.log("");
}

var args = require("minimist")(process.argv.slice(2), {string : "file"});

if(args.help || !args.file) {
    printHelp();
    process.exit(1);
}

var fileReader = require("./ReadFile.js");

fileReader.say(args.file)
    .val(function(contents){
        console.log(contents.toString());
    })
    .or(function(err){
        console.error("Error: " + err);
    });
