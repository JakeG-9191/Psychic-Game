// Global Variables
var gameChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var wins = 0;
var losses = 0;
var guessRemaining = 15;
var letterGuessCount = [];

// Var for HTML rewrite
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessNumText = document.getElementById("guess-amount");
var userChoiceText = document.getElementById("user-choice");
var otherLetterText = document.getElementById("other-letters");
var letterGuessCountText = document.getElementById("past-choice");

var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];
console.log("comp " + computerGuess);

// Event Watcher & Game Launch 

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("user " + userGuess);

    // letterGuessCount.push(userGuess);

    if (gameChoices.includes(userGuess) || guessRemaining >= 0) {

        letterGuessCount.push(userGuess);

        if (userGuess === computerGuess) {
            wins++;
            gameReset();
        } else if (guessRemaining === 0) {
            losses++;
            gameReset();
        } else {
            guessRemaining--;
        }

        // Write to HTML
        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessNumText.textContent = "Guesses remaining: " + guessRemaining;
        otherLetterText.textContent = "Your Previous Choices Included: "
        letterGuessCountText.textContent = letterGuessCount;

        function gameReset() {
            (guessRemaining = 15);
            (computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)]);
            console.log("comp 2 " + computerGuess);
            (letterGuessCount = []);
        }

    }
}