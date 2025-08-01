const closeRules()=>{
    const gameRules=document.getElementById("gameRules");
    if(gameRules.style.display=="flex"){
        gameRules.style.display="none";
    }
    else{
        gameRules.style.display="flex";
    }
};
window.onload=()={
    if(localStorage.getItem('yourScore')){
        var yourScore=localStorage.getItem('yourScore');
        var CompScore=localStorage.getItem('CompScore');
    }
    else{
        var yourScore=0;
        var CompScore=0;
    }
    document.getElementById('yourScore').innerHTML=yourScore
    document.getElementById('CompScore').innerHTML=CompScoreScore
}

const refresh=()=>{
    localStorage.setItem('yourScore',0)
    localStorage.setItem('CompScore',0)
    location.reload();
}
const playagain=()=>{
    document.getElementById("ChoiceCreator").style.display="flex";
    document.getElementById("ChoiceCreator").style.display="flex";
};

if(localStorage.getItem('yourScore')){
    var yourScore=localStorage.getItem('yourScore');
    var CompScore=localStorage.getItem('CompScore');

}
else{
    var yourScore=0;
    var CompScore=0;
}

const letsPlay=(yourScore)=>{
    localStorage.setItem('yourScore',yourScore)
    localStorage.setItem('CompScore',CompScore)


    const resultLoad=document.createElement("div");
    resultLoad.classList.add("winner");
    if(yourScore=="rock"){
        document.getElementById('myChoice').style.border="20px solid #0074b6";
              document.getElementById("yourChoice").src="./rock.png";

    }else if(yourScore=="scissor"){
        document.getElementById('myChoice').style.border="20px solid #ffa943";
              document.getElementById("yourChoice").src="./scissor.png";
}else if(yourScore=="paper"){
        document.getElementById('myChoice').style.border="20px solid #bd00ff";
              document.getElementById("yourChoice").src="./scissor.png";
}
document.getElementById("ChoiceCreator").style.display="none";
document.getElementById("ChoiceCreator").style.display="flex";
document.getElementById("ChoiceCreator").style.transform="scale(0)";
document.getElementById("ChoiceCreator").style.display="none";
document.getElementById("ChoiceCreator").style.display="inhert";


const elements = document.querySelectorAll('.winner');
elements.forEach(elements=>{
    element.remove();
});


const play=(yourChoice)=>{
    document.getElementById("choiceResultDetails").style.transform="scale(1)";
    document.getElementById("loadingDone").style.display="inherit";
    document.getElementById("loading").style.display="none";

    const choices=["rock","scissor","paper"];
    const randomIndex=Math.floor(Math.random() *3);
    const computerChoice =choice[randomIndex];


    const resultLoad=document.createElement("div");
    resultLoad.classList.add("winner");
}
let result="";

if(yourChoice==computerChoice){
    result="It's a tie!";
    document.getElementById("yourTitle").innerHTML="TIE UP🤝 ";
    document.getElementById("resultTitle").innerHTML="";
}else if(
    (yourChoice=="rock"&& computerChoice==="scissor")||
    (yourChoice=="paper"&& computerChoice==="rock")||
    (yourChoice=="scissor"&& computerChoice==="paper")
)
{
    result="You win!";
    yourScore++;
    localStorage.setItem('yourscore',yourScore)
    localyourScore=localStorage.getItem('yourscore')


    document.getElementById("yourScore").innerHTML=localyourScore;
    document.getElementById("yourTitle").innerHTML="You Win 😇";
    document.getElementById("resultTie").innerHTML="against pc";
    document.getElementById("myChoice").appendChild(resultLoad);
}else{
    result="You lose!";
    CompScore++;
    localStorage.setItem('CompScore',CompScore)
    localCompScore=localStorage.getItem('CompScore')

    document.getElementById("CompScore").innerHTML=localCompScore;
    document.getElementById("YourTitle").innerHTML="You Lost 😢";
    document.getElementById("resultTie").innerHTML="against pc";
    document.getElementById("myChoice").appendChild(resultLoad);
}
if(result=="You win!"){
    document.getElementById('next').style.display="inherit"
}else{
   document.getElementById('next').style.display="none" 
}


};










