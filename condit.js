var userChoice;
var randomNumber;
var computerChoice;
userChoice =prompt("heads or tails")
randomNumber =Math.round(Math.random())
if (randomNumber===0){
    computerChoice= "heads";
}else (randomNumber===1);{
    computerChoice="tails";
}
if (userChoice===computerChoice){
    alert ("You guessed right! The coin flip landed on " + computerChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

var birthYear;
birthYear=prompt("What year were you born?")
var yourAge
yourAge= (2023 - birthYear)
if (yourAge>21){
    alert ("You are old enough to drink in the US")
} else if (yourAge===21){
    alert ("You are old enough to drink in the US, barely")
} else (yourAge<21);{
    alert("Sorry you are not old enough to drink in the US")
}