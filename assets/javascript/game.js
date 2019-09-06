// Global Variables
var gameChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var wins = 0;
var losses = 0;
var guessRemaining = 15;

// Var for HTML rewrite
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessNumText = document.getElementById("guess-amount");
var userChoiceText = document.getElementById("user-choice");
var letterGuessCountText = document.getElementById("past-choice");

// Event Watcher
var letterGuessCount = [];

document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)]

    letterGuessCount.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
    } else {
        guessRemaining--;
    }

    // Write to HTML
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessNumText.textContent = "Guesses remaining: " + guessRemaining;
    letterGuessCountText.textContent = "Your previous choices included: " + letterGuessCount;

}

