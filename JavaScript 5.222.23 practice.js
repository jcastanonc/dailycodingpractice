// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "Caprisun"
favDrink = favDrink.trim()
console.log(favDrink)
//The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd()
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
/**let manyWords = "car laptop apple chair restaurant"
let result = manyWords.includes("apple")**/
let manyWords = "car, laptop, apple, dog, cat"
 if(manyWords.search("apple") != -1) {
    console.log("yes")
}else{
    console.log("no")
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors () {
    let random = Math.random()
    if(random < .33) {
        return "rock"
}else if(random < .66){
        return "paper"
}else{
        return "scissors"
}
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin (playerChoice) {
    let botChoice = rockPaperScissors()
    if((playerChoice === 'rock' && botChoice === 'scissors') || 
      (playerChoice === 'paper' && botChoice === 'rock') ||
      (playerChoice === 'scissors' && botChoice === 'paper') ){  
        console.log('You Win')
    }else if(playerChoice === botChoice) {
        console.log('You Tried')
    }else{
        console.log('You Lose')
    }
}
//checkWin('scissors')
//*Loops*
/**Create a function that takes an array of choices. 
Play the game x times where x is the number of choices in the array. 
Print the results of each game to the console.*/
function playGameXTimes (arr) {
    arr.forEach(choice => checkWin(choice))

}
playGameXTimes(['paper', 'scissors', 'rock'])
