/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
 */

function stray(numbers) {
    //take first element
    let strayChar = numbers[0];

    // see if it is different from the next 2
    if (strayChar !== numbers[1] && strayChar !== numbers[2]) return strayChar;

    // if not find the first value that is different
    for(let i = 1; i < numbers.length; i++){
      if(strayChar !== numbers[i])return numbers[i];
    }
}