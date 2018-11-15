// da goal of the whole game need be defined. let's start it at zero. Let's get the player's score set to 0 as well.
var targetValue = 0;
var playerScore = 0;

// each of dem crystalz is gonna need a value too.
var alphaValue = 0;
var betaValue = 0;
var gammaValue = 0;
var zappaValue = 0;

// We need some booleans to track where we are at in gameplay. 
// var firstClick = false;
// var clickAgain = false;
// var gameOver = false;

// Counters
var wins = 0;
var losses = 0;

//range for crystals: set values for alpha,beta,gamma,zappa
alphaValue = Math.floor(Math.random() * 11) + 1;
console.log("a " + alphaValue);
betaValue = Math.floor(Math.random() * 11) + 1;
console.log("b " + betaValue);
gammaValue = Math.floor(Math.random() * 11) + 1;
console.log("g " + gammaValue);
zappaValue = Math.floor(Math.random() * 11) + 1;
console.log("z " + zappaValue);

// set targetValue somewhere between 19-120
function setTargetValue() {
  targetValue = Math.floor(Math.random() * 100) + 20;
  console.log("tv " + targetValue);
  $("#target").text(targetValue);
};


//functions which add value to the score
function addAlpha() {
  playerScore = playerScore + alphaValue;
  $("#score").text(playerScore)
};
function addBeta() {
  playerScore = playerScore + betaValue;
  $("#score").text(playerScore)
};
function addGamma() {
  playerScore = playerScore + gammaValue;
  $("#score").text(playerScore)
};
function addZappa() {
  playerScore = playerScore + zappaValue;
  $("#score").text(playerScore)
};


$(document).ready(function () {

  setTargetValue();
  
    // on click of a crystal, call a function
    $("#alpha").on("click", addAlpha);
    $("#beta").on("click", addBeta);
    $("#gamma").on("click", addGamma);
    $("#zappa").on("click", addZappa);
  

    //game on, win, loss:
  // if (playerScore < targetValue) {
  //   $("#result").text("This game is in progress")
  // }
//  if (playerScore === targetValue && playerScore != 0) {
//     $("#result").text("That last game? You WON IT!")
//     gameOver = true;
//     setTargetValue();
//     wins++;
//     $("#wins").text("For the record, you won " + wins + " times.")
// console.log("ps "+playerScore + "  tv "+targetValue)
//   }
  // if (playerScore > targetValue {
  //   $("#result").text("Last time, you didn't win.")
  //   gameOver = true;
  //   setTargetValue();
  //   losses++;
  //   $("#losses").text("I wouldn't share this, but you lost " + wins + " times.")
  // }

});






// game restarts (window.load) function.reset() {location load} refresh 

// display counters for wins & losses
// set new targetValue
// scramble values for alpha,beta,gamma,zappa

// if (playerScore === 0 ){  
// $("<button>").on ("click", setTargetValue())
// };
