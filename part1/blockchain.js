"use strict";
var SHA256 = require("crypto-js/sha256");

const GENESIS_BLOCK = {
	"index": 0,
	"data": "genesis!",
	"timestamp": 1523291999654,
	"hash": "000000"
};

var blocks = [GENESIS_BLOCK, ];

var Blockchain = Object.assign(module.exports, {
	isValid,
	addBlock,
	print,
	blocks,
	createBlockHash
});

function isValid() {

	if (this.blocks.length === 0) {
		return false;
	}

	//Ensure genesis block has genesis properties:
		if (this.blocks[0].hash != GENESIS_BLOCK.hash ||
			this.blocks[0].index != GENESIS_BLOCK.index) {
			return false;
		}

	for (let i = 1; i < this.blocks.length; i++) {

		const prevBlock = this.blocks[i - 1];
		const currentBlock = this.blocks[i];

		if (typeof currentBlock.data != "string" ||
			currentBlock.index != i ||
			currentBlock.hash != createBlockHash(currentBlock) ||
			currentBlock.prevHash != prevBlock.hash ||
			currentBlock.timestamp < prevBlock.timestamp) {
			return false;
		}
	}

	return true;
}

function addBlock(data) {

	let block = {
		prevHash: this.blocks[this.blocks.length - 1].hash,
		index: this.blocks.length,
		data: data,
		timestamp: Date.now(),
	}
	block.hash = createBlockHash(block);

	this.blocks.push(block);
}

function print() {
	console.log(this.blocks);
}

function createBlockHash(block) {

	const hashString = `${block.prevHash};${block.index};${block.data};${block.timestamp}`;
	return SHA256(hashString).toString();
}