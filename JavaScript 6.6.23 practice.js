// Write a function "greet" that returns "hello world!"
function greet() {
  return "hello world!"
  
}
/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.*/
function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}