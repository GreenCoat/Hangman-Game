var guessesLeft;
var score = 0;
var word;
var wordList;
var answers = [];
var hidden = [];
var letterGuesses = [];
var fruit = ["apple", "orange", "tomato", "banana", "durian", "lemon", "peach"];
var vegetables = ["cucumber", "carrot", "potato", "onion", "pepper", "broccoli"];
var weapons = ["sword", "halberd", "lance", "spear", "rapier"];

gameReset();

function gameReset(){
	guessesLeft = 7;
	wordList = fruit;
	word = getWord(wordList);
	document.getElementById("totalWins").innerHTML = score;
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

	console.log(word);
	console.log(answers);
	console.log(hidden);
};

document.onkeyup = function(evt) {
	var l = evt.key.toLowerCase();

	if(l == "a" || l == "b" || l == "c" || l == "d" || l == "e" || l == "f" ||
	   l == "g" || l == "h" || l == "i" || l == "j" || l == "k" || l == "l" ||
	   l == "m" || l == "n" || l == "o" || l == "p" || l == "q" || l == "r" ||
	   l == "s" || l == "t" || l == "u" || l == "v" || l == "w" || l == "x" ||
	   l == "y" || l == "z") {

		if(answers.indexOf(l) != -1){

			for(var i = 0; i < answers.length; i++){
				if(answers[i] == l){
					hidden[i] = answers[i].toUpperCase();
					console.log(hidden); 
				}
			}

			if(hidden.indexOf("_") == -1){
				console.log("You win!");
			}
		} else {
			letterGuesses.push(l.toUpperCase()+" ");
			console.log(letterGuesses);
			guessesLeft--;
			if(guessesLeft == 0){
				console.log("No guesses remaining, you lose!");
			} else {
				console.log("Miss! You have " + guessesLeft + " guesses left.");
			}
		}
		console.log(l);
	} else {
		console.log("Invalid key");
	};
};