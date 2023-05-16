/**Problem 1: Create a function that takes in an array of numbers. 
Multiply each number together and alert the product. **/
function getProduct (arr) {
    let product = 1
    arr.forEach(num => product *= num)
    alert(product)
}
getProduct([20,12,33])
/**with for loop

function getProduct (arr) {
    let product = 1
    for (i=0; i < arr.length; i++) {
        product += arr[i]
    }
    alert(product)
}
**/
function checkFirstAndLast(arr) {
 if (arr[0] < arr[arr.length-1]){
    alert("Hi")
 }else if(arr[0] > arr[arr.length-1]) {
    alert("Bye") 
 }else{
    alert("We close in an hour")
  }
 }