let player_Score = 0;
let CPU_Score = 0;

function updateScores() {
    document.getElementById("playerScore").innerText = player_Score;
    document.getElementById("cpuScore").innerText = CPU_Score;
}
window.onload = updateScores;


function CPU(moves){

    const randomIndex = Math.floor(Math.random() * moves.length);

    const item = moves[randomIndex];

    return item;

}

function PlayerMoves(Pmoves){
    if (Pmoves == "Rock"){
        document.getElementById("myImage").src = 'assets/images/fist.png';
    }
    else if (Pmoves == "Paper"){
        document.getElementById("myImage").src ='assets/images/hand-paper.png';
    }
    else {
        document.getElementById("myImage").src='assets/images/scissors.png';
    }
}

const CPU_moves = ["Rock", "Paper", "Scissors"];

function playGame() {
    document.querySelectorAll(".game-state-button").forEach(button => {
        button.style.display = "block";
    });
    document.querySelectorAll(".mid-content .moves").forEach(button => {
        button.style.display = "block";
    });

    document.querySelector(".Start-Button").style.display = "none";
    document.querySelector(".scoreboard").style.display = "flex";

    const result = CPU(CPU_moves);

    if (result === "Rock") {
        document.getElementById("myImage").src = 'assets/images/fist.png';
    } else if (result === "Paper") {
        document.getElementById("myImage").src = 'assets/images/hand-paper.png';
    } else {
        document.getElementById("myImage").src = 'assets/images/scissors.png';
    }
    document.getElementById("result").innerHTML = result;
}


function determineWinner(playerMove, cpuMove) {
    if (playerMove === cpuMove) {
        return "It's a tie!";
    } else if (
        (playerMove === "Rock" && cpuMove === "Scissors") ||
        (playerMove === "Paper" && cpuMove === "Rock") ||
        (playerMove === "Scissors" && cpuMove === "Paper")
    ) {
        return "You win!";
    } else {
        return "CPU wins!";
    }
}

function resetGame() {
    document.getElementById("myImage").src = 'assets/images/rock-paper-scissors.png';
    document.getElementById("result").innerHTML = "";
    document.querySelector(".Start-Button").style.display = "block";
    document.querySelector(".scoreboard").style.display = "none";
    document.querySelectorAll(".game-state-button").forEach(button => {
        button.style.display = "none";
    });
    document.querySelectorAll(".moves").forEach(button => {
        button.style.display = "none";
 })
}
