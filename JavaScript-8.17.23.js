
/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.*/
function sumOfValues(arr){
    return arr.reduce((acc,c) => acc + Number(c), 0)
}
console.log(sumOfValues(["5",3,"2",1]))
//const s = r => r.reduce((a,c)=>+a+ +c)