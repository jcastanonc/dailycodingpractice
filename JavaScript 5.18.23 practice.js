// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Thanksgiving";
favHoliday = "Christmas";
console.log(favHoliday.toUpperCase());
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let aStr = "Christmas"
alert(aStr.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeFiveNum(n1,n2,n3,n4,n5) {
    let subtractAllFive = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(subtractAllFive))
}
takeFiveNum(22,45,77,88,99)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takesThreeNum(n1,n2,n3) {
     let min = Math.min(n1,n2,n3)
     let max = Math.max(n1,n2,n3)
     console.log(`The lowest num is ${min} and the highest num is ${max} `)
}
takesThreeNum(60,75,88)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails () {
    let result = Math.random()
    if (result < .5) {
        return 'heads'
    }else{
    return 'tails'
    }

    }

console.log(headsOrTails())