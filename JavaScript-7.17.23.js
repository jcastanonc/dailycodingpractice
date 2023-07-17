/* In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
*/
function wave(str){
  let waveArr = [];
  for (i=0; i<str.length; i++) {
    let letter = str[i]
    if (letter === ' '){
      continue;
    }else{
      waveArr.push(str.slice(0,i) + letter.toUpperCase() + str.slice(i+1))
    }
  }
  return waveArr;
}
