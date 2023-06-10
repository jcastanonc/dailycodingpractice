/* Write a function which takes a list of strings and returns each line prepended by the correct number.*/
var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}
/* Implement a function which convert the given boolean value into its string representation.*/
function booleanToString(b){
  if (b === true) {
    return "true"
  }else{
    return "false"
  }
  
}
/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.
*/
function addBinary(a,b) {
  let number = a + b;
  return number.toString(2)
}

