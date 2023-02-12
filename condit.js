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