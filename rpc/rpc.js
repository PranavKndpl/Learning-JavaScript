const choices= ["rock","paper","scissors"];
const player= document.getElementById("player");
const computer= document.getElementById("computer");
const result= document.getElementById("result");

const playerScoreDisp= document.getElementById("playerScore");
const compScoreDisp= document.getElementById("compScore");

let pScore= 0;
let cScore= 0;

function playGame(choice){

    const compChoice= choices[Math.floor(Math.random() *3)];

    let outcome="";

    if(choice === compChoice){
        outcome= "IT'S A TIE";
    }
    else{
        switch(choice){
            case "rock":
                outcome= (compChoice === "scissors")? "YOU WIN!":"YOU LOSE👎";
                break;
            
            case "paper":
                outcome= (compChoice === "rock")? "YOU WIN!":"YOU LOSE👎";
                break;
            
            case "scissors":
                outcome= (compChoice === "paper")? "YOU WIN!":"YOU LOSE👎";
                break;
        }
    }
    player.textContent= `PLAYER: ${choice}`;
    computer.textContent= `COMPUTER: ${compChoice}`;
    result.textContent= outcome;

    result.classList.remove("win","lose","tie");

    switch(outcome){
        case "YOU WIN!":
            result.classList.add("win");
            pScore++;
            playerScoreDisp.textContent= pScore;
            break;

        case "YOU LOSE👎":
            result.classList.add("lose");
            cScore++;
            compScoreDisp.textContent= cScore;
            break;

        case "IT'S A TIE":
            result.classList.add("tie");

    }
}

function reset(){

    player.textContent= `PLAYER:`;
    computer.textContent= `COMPUTER:`;
    result.textContent= ``;

    playerScoreDisp.textContent="0";
    compScoreDisp.textContent="0";

    pScore= 0;
    cScore= 0;
}