// da goal of the whole game need be defined. let's start it at zero. Let's get the player's score set to 0 as well.
var targetValue = 0;
var playerScore = 0;

// each of dem crystalz is gonna need a value too.
var alphaValue = 0;
var betaValue = 0;
var gammaValue = 0;
var zappaValue = 0;

// Counters
var wins = 0;
var losses = 0;

// set targetValue somewhere between 19-120
//range for crystals: set values for alpha,beta,gamma,zappa
// putting all these in the function setTargetValue allows us to call this at the beginning of each game to scramble the crystals.
function setTargetValue() {
  targetValue = Math.floor(Math.random() * 100) + 20;
  console.log("tv " + targetValue);
  $("#target").text(targetValue);
  alphaValue = Math.floor(Math.random() * 11) + 1;
  console.log("a " + alphaValue);
  betaValue = Math.floor(Math.random() * 11) + 1;
  console.log("b " + betaValue);
  gammaValue = Math.floor(Math.random() * 11) + 1;
  console.log("g " + gammaValue);
  zappaValue = Math.floor(Math.random() * 11) + 1;
  console.log("z " + zappaValue);
};


//functions which add value to the score
function addAlpha() {
  playerScore = playerScore + alphaValue;
  $("#score").text(playerScore);
  winCheck();
};
function addBeta() {
  playerScore = playerScore + betaValue;
  $("#score").text(playerScore);
  winCheck();
};
function addGamma() {
  playerScore = playerScore + gammaValue;
  $("#score").text(playerScore);
  winCheck();
};
function addZappa() {
  playerScore = playerScore + zappaValue;
  $("#score").text(playerScore);
  winCheck();
};

function newGame() {
  setTargetValue();
  playerScore = 0;
  $("#scramble").text("Just when you get to know an angle, it goes and changes on you...");
}

function winCheck() {
  if (playerScore === targetValue && playerScore != 0) {
    $("#result").text("You found the Magical Angle! Keep going!");
    wins++;
    $("#wins").text(wins);
    newGame();
  }
  if (playerScore > targetValue) {
    $("#result").text("Your Angle was too large. Let's try it again.")
    losses++;
    $("#losses").text(losses);
    newGame();
  }
};

$(document).ready(function () {

  setTargetValue();

  // on click of a crystal, call a function
  $("#alpha").on("click", addAlpha);
  $("#beta").on("click", addBeta);
  $("#gamma").on("click", addGamma);
  $("#zappa").on("click", addZappa);


  //game on, win, loss:



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

  // }

});






// game restarts (window.load) function.reset() {location load} refresh 

// display counters for wins & losses
// set new targetValue
// scramble values for alpha,beta,gamma,zappa

// if (playerScore === 0 ){  
// $("<button>").on ("click", setTargetValue())
// };
