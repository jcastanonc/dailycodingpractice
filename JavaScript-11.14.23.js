/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order. */
function digitize(n) {
  //parameter: non-negative number
  //return numbers in reverse
  return String(n).split('').map(Number).reverse()
}   

