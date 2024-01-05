/* Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it. */
function remove (string) {
 //parameter is a stringhg
 // return string without exclamation mark at the end
  return string.replace(/\!$/, "") 
}