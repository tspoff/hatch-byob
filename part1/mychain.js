"use strict";

var path = require("path");
var fs = require("fs");
// var Blockchain = require("./blockchain.js");
var MyREPL = require("./repl.js");

var args = require("minimist")(process.argv.slice(2),{
	string: [ "load" ],
});

if (args.load) {
	let file = path.resolve(args.load);
	let contents = fs.readFileSync(file,"utf-8");
	let blocks = JSON.parse(contents);

	// TODO

	// Hint: isValid()
}

var listener = MyREPL.start();

listener.on("add",function onAdd(text = ""){
	// TODO
});

// TODO: "print", "save"

// Hint:
// fs.writeFileSync(file,JSON.stringify( .. ),"utf-8");
