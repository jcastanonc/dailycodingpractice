/*Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is a vowel. */
function replace(s){
  //parameters are letters specifically vowels
  //return ! instead of vowel
  //example Hi should be H!
  return s.replace(/[aeoiu]/ig, '!')  
}
