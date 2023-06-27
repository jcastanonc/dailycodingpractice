/*Simple, given a string of words, return the length of the shortest word(s). */
function findShort(s){
  let word = s.split(" ").sort((a,b) => a.length - b.length);
  return word[0].length;
}
