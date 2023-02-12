var userChoice;
var randomNumber;
var computerChoice;
userChoice =prompt("heads or tails")
randomNumber =Math.round(Math.random())
if (randomNumber===0){
    computerChoice= "heads";
}else (randomNumber===1){
    computerChoice="tails"
}






var birthYear;
birthYear=prompt("What year were you born?")

function yourAge(num){
if (num>21) {
    return alert("You are old enough to drink in the US");
} else if (num=21){
    return alert("You are old enough to drink in the US...barley");
}else (num<21);{
    return alert("Sorry, you are not old enough to drink in the US");
}
}
