
// let rounds = parseInt(prompt("How many rounds do you want to play?"));
let roundCounter =1;
console.log("START");

const keys = document.querySelectorAll('.decision');
keys.forEach((key) =>{
    key.addEventListener("click", () => {
        const value = key.value;
        console.log(value);
        evaluateWinner(key.value, computerPlay());
      
});
});
 

  // OLD STUFF
  /*
while(roundCounter <= rounds){
    let playersChoice = (prompt("Rock, Paper or Scissors?"));
    playersChoice = playersChoice.toLowerCase();
    if(playersChoice !== "rock" && playersChoice !== "paper" && playersChoice !== "scissors"){
        playersChoice = (prompt("Seems like you mistyped your answer. Try again").toLowerCase);
    }else{
        console.log("Round " + roundCounter + ": " + evaluateWinner(playersChoice, computerPlay()));
        roundCounter++;
    }
}
*/

function evaluateWinner(player, computer){
    let result;
    if(player === computer){
        result = "Draw. ";
    }else if(player === "rock" && computer ==="scissor"){
        result = "You win. ";
    }else if(player === "rock" && computer ==="paper"){
        result = "You loose. ";
    }else if(player === "paper" && computer === "scissor"){
        result = "You loose. ";
    }else if(player === "paper" && computer ==="rock"){
        result = "You win. ";
    }else if(player === "scissor" && computer === "rock"){
        result = "You loose. ";
    }else if(player === "scissor" && computer === "paper"){
        result = "You win. ";
    }
    
    if(result ==="You win. "){
        document.querySelector(".result").textContent = result + player + " beats " + computer;
    }else if (result ==="Draw. "){
        document.querySelector(".result").textContent  = result;
    }else if(result ==="You loose. "){
        document.querySelector(".result").textContent  = result + computer + " beats " + player;
    }
}

function computerPlay(){
    let choice = getRandom();
    let computer;
  
    switch(choice){
        case 0:
           computer="rock";
           break;
        case 1:
            computer="paper";
            break;
        case 2:
            computer="scissor";
            break;

    }
    return computer;
    
}
function getRandom(){
    return Math.floor(Math.random()*3);
}