var player1 = "Player 1"
var player2 = "Player 2"

function rollDice(){
    var name1 = document.querySelector("#player1name").value.trim();
    var name2 = document.querySelector("#player2name").value.trim();

    if (name1 !==""){
        player1 = name1;
    }
    if (name2 !==""){
        player2 = name2;
    }

    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    console.log(randomNumber1);
    document.querySelector(".img1").setAttribute("src","./images/dice" +randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src","./images/dice" +randomNumber2 + ".png");

    if(randomNumber1>randomNumber2){
        document.querySelector("#result").innerHTML = (`👑 ${player1} Wins!`)
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("#result").innerHTML = (`${player2} Wins! 👑`)
    }
    else{
        document.querySelector("#result").innerHTML = ("⚖️ Draw! ⚖️")
    }
}
document.querySelector("#player1name").addEventListener("input",function(){
    const name = this.value.trim();
    document.querySelector("#player1label").innerText = name || "Player 1";
});

document.querySelector("#player2name").addEventListener("input",function(){
    const name = this.value.trim();
    document.querySelector("#player2label").innerText = name || "Player 2";
});
document.querySelector("#rollBtn").addEventListener("click",rollDice);