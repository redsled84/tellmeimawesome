#!/usr/bin/env node
var chalk = require('chalk');

function getRandomAwesome(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randAwesome = getRandomAwesome(0, 4);
var awesomes = [
	"You there, yes you. You're pretty darn awesome",
	"Hey you're pretty awesome, keep on workin\'",
	"On a awesome scale from (1 - 10), you're a 11",
	"HEY YOU THERE!!! YOU'RE F***ING awesome DUDE",
	"ᵃʷᵉˢᵒᵐᵉAWESOMEₐwₑₛₒₘₑ, yₒᵤ'ᵣₑ ₐwₑₛₒₘₑ",
];

var awesomeString = awesomes[randAwesome];
var pos = awesomeString.split(' ');
var blankAwesomeString = '';

console.log();
for (var i = 0; i < pos.length; i++) {
	if (pos[i].toLowerCase() != 'awesome' && pos[i].toLowerCase() != 'awesome,') {
		blankAwesomeString += chalk.red(pos[i]) + ' '
	} else {
		blankAwesomeString += chalk.bold.cyan(pos[i]) + ' ';
	}
}
console.log(blankAwesomeString);
console.log();