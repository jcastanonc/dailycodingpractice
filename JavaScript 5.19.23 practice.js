//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
  return words.join(" ")
};


/**Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.**/

function past(h, m, s){
  //#Happy Coding! ^_^
  const convertHours = h * 60 * 60 * 1000;
  const convertMinutes = m * 60 * 1000;
  const convertSeconds = s * 1000;
  return convertHours + convertMinutes + convertSeconds;
}
//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
