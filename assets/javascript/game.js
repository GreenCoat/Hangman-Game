var guessesLeft;
var gameOn = false;
var score = 0;
var word;
var answers = [];
var hidden = [];
var letterGuesses = [];
var fruit = ["apple", "orange", "tomato", "banana", "durian", "lemon", "peach"];
var vegetables = ["cucumber", "carrot", "potato", "onion", "pepper", "broccoli"];
var animals = ["monkey", "elephant", "parrot", "horse", "sheep"];
var wordList = fruit;
var pictures = [
	"....._______<br/>.....|.....|<br/>.....X.....|<br/>..../|\\....|<br/>.....|.....|<br/>..../.\\....|<br/>...........|<br/>============",
	"....._______<br/>.....|.....|<br/>.....0.....|<br/>..../|\\....|<br/>.....|.....|<br/>..../......|<br/>...........|<br/>============",
	"....._______<br/>.....|.....|<br/>.....0.....|<br/>..../|\\....|<br/>.....|.....|<br/>...........|<br/>...........|<br/>============",
	"....._______<br/>.....|.....|<br/>.....0.....|<br/>..../|\\....|<br/>...........|<br/>...........|<br/>...........|<br/>============",
	"....._______<br/>.....|.....|<br/>.....0.....|<br/>..../|.....|<br/>...........|<br/>...........|<br/>...........|<br/>============",
	"....._______<br/>.....|.....|<br/>.....0.....|<br/>.....|.....|<br/>...........|<br/>...........|<br/>...........|<br/>============",
	"....._______<br/>.....|.....|<br/>.....0.....|<br/>...........|<br/>...........|<br/>...........|<br/>...........|<br/>============",
	"....._______<br/>.....|.....|<br/>...........|<br/>...........|<br/>...........|<br/>...........|<br/>...........|<br/>============",
	]


function gameReset(){
	console.log("reset");
	guessesLeft = 7;
	answers = [];
	hidden = [];
	letterGuesses = [];
	word = getWord(wordList);
	document.getElementById("totalWins").innerHTML = score;
	displayWord();
	displayGuesses();
	document.getElementById("letterGuesses").innerHTML = "None";
	gameOn = true;
}

function getWord(list){
	word = list[Math.floor(Math.random() * list.length)];
	for(var i = 0; i < word.length; i++) {
		answers.push(word.charAt(i));
		if(i < word.length - 1) {
			answers.push(" ");
		};
	};
	
	answers.forEach(function(val){
		if(val === " ") {
			hidden.push(val);
		} else {
			hidden.push("_");
		}
	});
};

function displayWord(){
	var tempString = "";
	for(var i = 0; i < hidden.length; i++){
		tempString += hidden[i];
	}
	document.getElementById("currentWord").innerHTML = tempString;
}

function displayGuesses(){
	var tempString = "";
	for(var i = 0; i < letterGuesses.length; i++){
		tempString += letterGuesses[i];
	}
	document.getElementById("letterGuesses").innerHTML = tempString;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("picture").innerHTML = pictures[guessesLeft];
}

document.getElementById("reset").onclick = function(){gameReset();};

document.getElementById("fruit").onclick = function(){
	wordList = fruit;
	document.getElementById("fruit").className = "selected";
	document.getElementById("vegetables").className = "";
	document.getElementById("animals").className = "";
};
document.getElementById("vegetables").onclick = function(){
	wordList = vegetables;
	document.getElementById("fruit").className = "";
	document.getElementById("vegetables").className = "selected";
	document.getElementById("animals").className = "";
};
document.getElementById("animals").onclick = function(){
	wordList = animals;
	document.getElementById("fruit").className = "";
	document.getElementById("vegetables").className = "";
	document.getElementById("animals").className = "selected";
};

document.onkeyup = function(evt) {
	var l = evt.key.toLowerCase();
	if(hidden.indexOf(l.toUpperCase()) == -1 && letterGuesses.indexOf(l.toUpperCase()) == -1 && gameOn == true) {
		if(l == "a" || l == "b" || l == "c" || l == "d" || l == "e" || l == "f" ||
	   	   l == "g" || l == "h" || l == "i" || l == "j" || l == "k" || l == "l" ||
	       l == "m" || l == "n" || l == "o" || l == "p" || l == "q" || l == "r" ||
	       l == "s" || l == "t" || l == "u" || l == "v" || l == "w" || l == "x" ||
	       l == "y" || l == "z") {

			if(answers.indexOf(l) != -1){
				for(var i = 0; i < answers.length; i++){
					if(answers[i] == l){
						hidden[i] = answers[i].toUpperCase();
						displayWord();
					}
				}

				if(hidden.indexOf("_") == -1){
				score += 1;
				document.getElementById("totalWins").innerHTML = score;
				gameOn = false;
				}
			} else {
				letterGuesses.push(l.toUpperCase());
				letterGuesses.push(" ");
				document.getElementById("letterGuesses").innerHTML = letterGuesses;
				guessesLeft--;
				displayGuesses();
				if(guessesLeft == 0){
					gameOn = false;
				} 
			}
		};
	}
};