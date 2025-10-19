const choices = ["Pedra", "Papel", "Tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "EMPATE";
    }
    else{
        switch(playerChoice){
            case "Pedra":
                result = (computerChoice === "Tesoura") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!"
                break;
            case "Papel":
                result = (computerChoice === "Pedra") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!"
                break;
            case "Tesoura":
                result = (computerChoice === "Papel") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!"
                break;
        }
    }

    playerDisplay.textContent = `JOGADOR: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTADOR: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("winText", "loseText")
    switch(result){
        case "VOCÊ VENCEU!":
            resultDisplay.classList.add("winText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "VOCÊ PERDEU!":
            resultDisplay.classList.add("loseText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}