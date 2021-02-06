var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];

const player2_Button = document.getElementById('player-2');
console.log(player2_Button);

player2_Button.addEventListener('click',rollDice_2);

//Player Array

var player1=["ProGrad", 0, 1000];
var player2=["FACEPrep", 0, 1000];

//Player 1 and Player 2 Rolling Dice

function rollDice_2(){
    let position=Math.floor(Math.random()*6)+1;
    console.log("Player two rolls", position)
    changePosition_2(player2[2],position);
}

//Player 1 and Player 2 Position

function changePosition_2(old,currentPos){
    var newPosition=old+currentPos;
    player2[2]=newPosition;
    console.log(player2[2]);
    updateMoney_2(player2[2]);
}

// Update the Money

function updateMoney_2(p2){
    var updateMoney=0;
    if(p2<board.length)
    updateMoney=player2[2]-board[p2-1];
    else{
        p2=p2%15;
        updateMoney=player2[2]-board[p2-1];
    }
    console.log(updateMoney);
}
