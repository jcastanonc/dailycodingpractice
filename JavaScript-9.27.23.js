/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */
function getMiddle(s){
  let sMid = 0.0
  if(s.length % 2 == 0){
    sMid = (s.length/2)
    return s.substring(sMid-1,sMid+1)
  } else{
    sMid = (s.length/2) - 0.5
    return s.substr(sMid,1)
  }
}
