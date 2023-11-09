/* Make a program that filters a list of strings and returns a list with only your friend's name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not..*/
function friend(friends){
  //parameter: friends name
  //return friends name with 4 letters
  //example:: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
  return friends.filter(n => n.length === 4)
}
