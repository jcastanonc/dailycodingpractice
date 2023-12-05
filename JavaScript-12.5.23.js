/*Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2. */
function rowWeights(array){
  //parameter of an array of positive integers
  //return new array of two integers (first one is total weight of team 1 
  //and second one is total weight of team 2)
 let result = [0, 0];
  for (let i = 0; i < array.length; i++) {
    i % 2 === 0 ? result[0] += array[i] : result[1] += array[i];
}
  return result;
}
