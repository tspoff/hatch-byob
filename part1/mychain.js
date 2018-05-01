"use strict";

var path = require("path");
var fs = require("fs");
var Blockchain = require("./blockchain.js");
var MyREPL = require("./repl.js");

var args = require("minimist")(process.argv.slice(2),{
	string: [ "load" ],
});

if (args.load) {
	let file = path.resolve(args.load);
	let contents = fs.readFileSync(file,"utf-8");
	let blocks = JSON.parse(contents);

	Blockchain.blocks = blocks;
	
	if (!Blockchain.isValid()) {
		//TODO: Complain appropriately
		console.log("Invalid blockchain data loaded from " + file.toString());
		process.exit();
	}
}

var listener = MyREPL.start();

listener.on("add",function onAdd(text = ""){
	Blockchain.addBlock(text);
});

listener.on("save", function onSave(text = "") {
	let file = path.resolve(text);
	fs.writeFileSync(file, JSON.stringify(Blockchain.blocks), "utf-8");
});

listener.on("print", function onPrint(text = "") {
	Blockchain.print();
});