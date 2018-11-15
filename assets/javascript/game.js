// da goal of the whole game need be defined. let's start it at zero.
var targetValue = 0;

// each of dem crystalz is gonna need a value too.
var alphaValue = 0;
var betaValue = 0;
var gammaValue = 0;
var zappaValue = 0;

//range for crystals
//set values for alpha,beta,gamma,zappa
alphaValue = Math.floor(Math.random()*11) + 2;
console.log("a "+alphaValue);
betaValue = Math.floor(Math.random()*11) + 2;
console.log("b "+betaValue);
gammaValue = Math.floor(Math.random()*11) + 2;
console.log("g "+gammaValue);
zappaValue = Math.floor(Math.random()*11) + 2;
console.log("z "+zappaValue);

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
var playerScore = 0;

$(document).ready(function() {

// on click of a crystal, call a function
$("#alpha").on("click", addAlpha);
$("#beta").on("click", addBeta);
$("#gamma").on("click", addGamma);
$("#zappa").on("click", addZappa);

//functions which add value to the score
function addAlpha() {
  playerScore = playerScore + alphaValue;
  $("#score").text("Your Score: " +playerScore)
  console.log ("ps "+playerScore);
};
function addBeta() {
  playerScore = playerScore + betaValue;
  $("#score").text("Your Score: " +playerScore)
  console.log ("ps "+playerScore);
};
function addGamma() {
  playerScore = playerScore + gammaValue;
  $("#score").text("Your Score: " +playerScore)
  console.log ("ps "+playerScore);
};
function addZappa() {
  playerScore = playerScore + zappaValue;
  $("#score").text("Your Score: " + playerScore)
  console.log ("ps "+playerScore);
};
  
// set targetValue
//range for targetValue
targetValue = Math.floor(Math.random()*100) + 20;
console.log ("tv "+targetValue);
$("#target").text("Target Score: " + targetValue);



if (playerScore === targetValue) {
   $("#result").text("You're a WINNER!")
  }
if (playerScore > targetValue) {
  $("#result").text("Many will enter. You didn't win.")
  }


// display .target { display: inline }



// logic

// if (playerScore === targetValue) {WIN}
// if (playerScore > targetValue) {GAME OVER}

// game restarts (window.load) function.reset() {location load} refresh 

// display counters for wins & losses
// set new targetValue
// scramble values for alpha,beta,gamma,zappa


});