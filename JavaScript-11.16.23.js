/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on: make as few changes as possible. if the string contains an equal number of uppercase and lowercase letters, convert the string to lowercase. */
function solve(s){
    //parameter is a string
    // return either all lowercase or uppercase
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upper++;
    } else {
      lower++;
    }
  }
  return lower < upper ? s.toUpperCase() : s.toLowerCase();
}
