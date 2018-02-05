var wins1 = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessRemaining = document.getElementById("guess-remaining");
var lettersGuessed = document.getElementById("letters-guessed");
var KeyPressed;
var compChoice;
var wins = "0";
var lossCount = 0;
var guessesRemaining = 9;
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessed = [];
var PressedKeys = [];
var keyGuessed = false;

document.onkeyup = function() {
    keyGuessed = false;
    KeyPressed = event.key;
    for (i=0; i < PressedKeys.length; i++) {
        if (KeyPressed === PressedKeys[i]) {
            keyGuessed = true;
        }
    }
    if (keyGuessed === false){
        decide(event.key);
    }
  };
  function decide(a) {
        PressedKeys.push(a);
        guessed.push(a);
        if (a === compChoice) {
            wins++
            roundReset();
        } else {
            guessesRemaining--;
        }
        if (guessesRemaining === 0) {
            lossCount++;
            roundReset();
        }
    };