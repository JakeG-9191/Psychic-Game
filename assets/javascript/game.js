// Global Variables
var gameChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var wins = 0;
var losses = 0;
var guessRemaining = 10;
var letterGuessCount = [];

// Var for HTML rewrite
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessNumText = document.getElementById("guess-amount");
var userChoiceText = document.getElementById("user-choice");
var otherLetterText = document.getElementById("other-letters");
var letterGuessCountText = document.getElementById("past-choice");

// Game launches with 1 computer choice for random letter selected 
var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];
console.log("comp " + computerGuess);

// User presses key to begin playing game

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("user " + userGuess);
    // User must have guesses remaining to play
    if (gameChoices.includes(userGuess) || guessRemaining > 1) {
        // User guess is pushed to array to display as previous choice 
        letterGuessCount.push(userGuess);
        // If user guesses correct, move win 1, or if guesses runs out then add 1 to loss, either case engage game reset 
        if (userGuess === computerGuess) {
            wins++;
            gameReset();
        } else if (guessRemaining === 1) {
            losses++;
            gameReset();
        } else {
            guessRemaining--;
        }

        // Write to HTML for user information 
        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessNumText.textContent = "Guesses remaining: " + guessRemaining;
        otherLetterText.textContent = "Your Previous Choices Included: "
        letterGuessCountText.textContent = letterGuessCount;
        // Game function reset to continue game after win or loss 
        function gameReset() {
            (guessRemaining = 10);
            (computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)]);
            console.log("comp 2 " + computerGuess);
            (letterGuessCount = []);
        }

    }
}