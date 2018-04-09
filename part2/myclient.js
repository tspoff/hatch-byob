"use strict";

var fetch = require("node-fetch");

var Transaction = require("./transaction.js");
var MyREPL = require("./repl.js");

var listener = MyREPL.start();

listener.on("add",async function onAdd(text = ""){
	// TODO

	// Hints:
	//
	// createTransaction(..)
	//
	// fetch("http://localhost:8080/transaction/send", .. )
	//
	// await res.json()
	//
	// return tr.hash
	//
	// throw "Transaction failed to be sent.";
});

listener.on("check",async function onSave(transactionHash){
	// TODO
});
