
// *Variables*
/* Declare a variable and assign it to a sentance as a string. 
Alert if the sentance is a question */

 const randomSentence = "Hey this is my sentence?"
alert(randomSentence.endsWith("?")) 
//Declare a variable, assign it a string of multiple words, 
//replace every "jr. dev" with "software engineer", and print it to the console
let randomWords = "cats dogs rain sunshine rocks jr. dev"
let result = randomWords.replaceAll("jr. dev", "software engineer")
console.log(result)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor () {
    const randomNumber = Math.floor(Math.random * 3)
    if (randomNumber < .33) {
        return "rock";
    }else if(randomNumber < .66) {
        return "paper";
    }else{
    return "scissors";
    }


}

