//nested if else


//try to make a game in which user guess a number and 
//if he guess winning no he wins the game 

let winningNo=21;
let userGuess=prompt("Guess a Number");
userGuess=Number(userGuess);

if(userGuess===winningNo){
    console.log("You Win");
}
else{
    if(userGuess>winningNo){
        console.log("Number too large");
    }
    else
    {console.log("Number too small");}
}