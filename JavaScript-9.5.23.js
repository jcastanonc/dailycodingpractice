/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
*/
function alphabetPosition(text) {
  const upperText = text.toUpperCase()
  const arr = upperText.split("").map(let => let.charCodeAt())
  const newArr = arr.filter(num => {
    if(num > 64 && num < 91) {
      return num
    }
  })
const updatedNumsArr = newArr.map(num => num - 64)
  return updatedNumsArr.join(" ")
}
