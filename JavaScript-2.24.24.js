/*Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens' */
function combineNames(firstName, lastName){
  //parameters are the first name and last name
  //return the names joined
  let fullName = firstName.concat(" ", lastName)
  return fullName
}