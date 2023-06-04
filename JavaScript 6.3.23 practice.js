//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = str => console.log(str.split('').reverse().join(''))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = str => alert( str === str.split('').reverse().join(''))
palindromeCheck('racecar')
/*Create a function that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers.*/
function evenOrOdd(number) {
  if ( number % 2 === 0) {
    return "Even"
  }else if( number %2 !== 0) {
    return "Odd"
  }else{
    return "Not a valid number"
  }
}
/*Create a Tony Hawk Pro Skater constructor that makes 
fighting game characters with 4 properties and 3 methods */
function ProSkater (kick, punch, defend, spin) {
    this.kick = kick;
    this.punch = punch;
    this.defend = defend;
    this.spin = spin;
    this.attack = function () {
        console.log('got you now!')
    }
    this.surpriseAttack = function () {
        console.log('you didnt see this coming!')
    }
    this.finalMove = function () {
        console.log('you are defeated!')
    }
}