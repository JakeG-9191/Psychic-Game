// Global Variables
// var gameChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var gameChoices = ["a", "p"]
var wins = 0;
var losses = 0;
var guessRemaining = 15;
var letterGuessCount = [];

// Var for HTML rewrite
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessNumText = document.getElementById("guess-amount");
var userChoiceText = document.getElementById("user-choice");
var letterGuessCountText = document.getElementById("past-choice");

// Event Watcher & Game Launch 

if (guessRemaining > 0) {

    var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log("comp " + computerGuess);

    document.onkeyup = function (event) {

        var userGuess = event.key;
        console.log("user " + userGuess);

        letterGuessCount.push(userGuess);

        // Write to HTML
        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessNumText.textContent = "Guesses remaining: " + guessRemaining;
        letterGuessCountText.textContent = "Your previous choices included: " + letterGuessCount;

        if (userGuess === computerGuess) {
            wins++;
        } else {
            guessRemaining--;
        }
    }

}
