"use strict"
// 0 is used to represent scissors, 1 is used for rock and 2 for paper
function getComputerInput() {
    let randomDigit = Math.floor(Math.random() * 3);
    return randomDigit;
}
function getPlayerInput() {
    let playerChoice = prompt("Choose 0 for Scissors, 1 for Rock or 2 for Paper");
    if (playerChoice != "0" && playerChoice != "1" && playerChoice != "2") {
        alert("invalid response, try again.");
        getPlayerInput();
    } else {
        return playerChoice;
    }
}
function round(Player, AI) {
    if (Player == AI) {
        // the score 0 means its tied, the score 1 means the player wins the score 2 means the AI scores a point
        return 0;
    } else if (Player > AI) {
        return 2;
    } else if (Player < AI) {
        return 1;
    } else if (AI == 2 && Player == 0) {
        return 1;
    } else if (AI == 0 && Player == 2) {
        return 2;
    }
}
function game() {
    let playerscore = 0;
    let AIscore = 0;
    document.querySelector("#Welcome").textContent = "Lets Begin!";
    let roundAmmount = Number(prompt("How many rounds?"));
    if (isNaN(roundAmmount)) {
        alert("You can only use a number, try again!");
        game();
    } else {
        window.location.replace("Game.html");
        for (let i = 0; i <= roundAmmount; i++) {
            switch (round(getPlayerInput(), getComputerInput())){
                case 1:
                    playerscore++;
                    document.querySelector("playerscore").textContent = playerscore;
                    document.querySelector("WinLose").textContent = "Player Wins!";
                    break;
                case 2:
                    AIscore++;
                    document.querySelector("aiscore").textContent = AIscore;
                    document.querySelector("WinLose").textContent = "AI Wins!";
                    break;
                case 0:
                    document.querySelector("WinLose").textContent = "Tie!";
                    break;
            }
        }
    }
}
game();
