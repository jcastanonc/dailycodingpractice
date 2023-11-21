/*Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error". */
function problem(x){
  //parameter = x which is a number
  //return x multiplies by 50 and increased by 6
  //if a string return "Error"
  if (typeof(x) == 'number') {
    return x * 50 + 6
  }else{
    return 'Error'
  }
}
