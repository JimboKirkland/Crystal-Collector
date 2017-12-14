//GLOBALS ********************



var crystal = {
	blue: 
	{
		name: "Blue",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	green: 
	{
		name: "Green",
		value: 0
	},
	purple: 
	{
		name: "Purple",
		value: 0
	}
};



var currentScore 	= 0;
var targetScore 	= 0;


var winCount 		= 0;
var lossCount 		= 0;



//FUNCTIONS ********************
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}


var startGame = function() {

	//reset current
	var currentScore = 0;

	//reset target between 19-120
	targetScore = getRandom(19, 120);

	//set different values for crystals 1-12
	crystal.blue.value 		= getRandom(1, 12);
	crystal.red.value 		= getRandom(1, 12);
	crystal.green.value 	= getRandom(1, 12);
	crystal.purple.value 	= getRandom(1, 12);

	//change html to reflect
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

}

var addValues = function(crystal) {

	currentScore = currentScore + crystal.value;

	$("#yourScore").html(currentScore);

	checkWin();

	console.log("Your score: " + currentScore);
}


var checkWin = function() {

 //CHECK currentScore and targetScore
 	if(currentScore > targetScore) {
 		alert("Sorry, you lost!");
 		console.log("You lost");

 		lossCount++;

 		$("#lossCount").html(lossCount);

 		startGame();
 	}

 	else if (currentScore == targetScore) {
 		alert("Congratulations! You won!");
 		console.log("You won!");

 		winCount++;

 		$("#winCount").html(winCount);

 		startGame();
 	}

}


//MAIN FLOW ********************

startGame();


$("#blue").click(function() {
	addValues(crystal.blue);
});

$("#red").click(function() {
	addValues(crystal.red);
});

$("#green").click(function() {
	addValues(crystal.green);
});

$("#purple").click(function() {
	addValues(crystal.purple);
});



//console.log("Target score: " + targetScore);
//console.log("Blue: " + blueCrystal.value + " | Red: " + redCrystal.value + " | Green" + greenCrystal.value + " | Purple: " + purpleCrystal.value);

