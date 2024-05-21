let playerPoints = 0;
let pcPoints = 0;


function pcMove(){
    let moves = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * moves.length);
    let pcRandomMove = moves[randomIndex];
    return pcRandomMove;
}


function playerMove(input){
    let pcRandomMove = pcMove()
    let playerChoosenMove = input;
    insertImg(pcRandomMove);

    switch(playerChoosenMove){
        case "rock":
            if (pcRandomMove === "rock"){
                tie();
                
            } else if (pcRandomMove === "paper"){
                lost();
                pcPoints += 10;
            } else if (pcRandomMove === "scissors"){
                winner();
                playerPoints += 10;
            }
            break;

        case "paper":
            if (pcRandomMove === "rock"){
                winner();
                playerPoints += 10;
            } else if (pcRandomMove === "paper"){
                tie();
            } else if (pcRandomMove === "scissors"){
                lost();
                pcPoints +=10;
            }
            break;
            
        case "scissors":
            if (pcRandomMove === "rock"){
                lost();
                pcPoints += 10;
            } else if (pcRandomMove === "paper"){
                winner()
                playerPoints += 10;
            } else if (pcRandomMove === "scissors"){
                tie();
            }
            break;
            
    }
    updatePoints();
    checkIfWon();

}



function winner(){
    let text = "Player wins!"
    document.getElementById("winner").style.color = "#E9FF5E";
    document.getElementById("winner").innerHTML = text;
}

function tie(){
    let text = "Its a tie! No one wins!"
    document.getElementById("winner").style.color = "#2A52E1";
    document.getElementById("winner").innerHTML = text;
}

function lost(){
    let text = "Pc has won!"
    document.getElementById("winner").style.color = "#E51010";
    document.getElementById("winner").innerHTML = text;
}

function insertImg(nameOfMove){
    const imgSors = `${nameOfMove}.png`;
    document.getElementById("img1").src = imgSors;
    document.getElementById("img1").style.display = "inline-block";
}


function updatePoints(){
    document.getElementById("playerpoint").innerHTML = playerPoints;
    document.getElementById("pcpoints").innerHTML = pcPoints;
}

function checkIfWon(){
    if (playerPoints >= 50){
        document.getElementById("winner").innerHTML = "Player wins this game!"
        playerPoints = 0;
        pcPoints = 0;
        document.getElementById("img1").style.display = "none";
    }else if (pcPoints >= 50){
        document.getElementById("winner").innerHTML = "PC wins this game!"
        playerPoints = 0;
        pcPoints = 0;
        document.getElementById("img1").style.display = "none";
    }

    updatePoints();
}