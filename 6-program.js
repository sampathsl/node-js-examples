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

var fileReader = require("./6.js");

fileReader.setFile(args.file)
.val(function(content){
    console.log(content);
})
.or(function(err) {
    console.error("Error : " + err);
});