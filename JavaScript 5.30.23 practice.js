//Given an integer or a floating-point number, find its opposite.
function opposite(number) {
  return -number;
  }
/*You're writing code to control your town's traffic lights. 
You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light
 and returns a string representing the state the light should change to.  */
function updateLight(current) {
  if (current === 'green'){
    return 'yellow'
  }else if(current === 'yellow'){
    return 'red'
  }else if(current === 'red'){
    return 'green'
  }else{
    return 'not valid'
  }
}
/*In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata. */
function testEven(n) {
    if (n % 2 === 0){
      return true
    }else if(n % 2 !== 0){
      return false
    }else{
      return "not a valid entry"
    }
}