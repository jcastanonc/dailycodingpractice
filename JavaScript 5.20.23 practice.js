//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let arrShow = ["Friends", "Brooklyn 99", "Broad City", "Gumball"]

arrShow.forEach( show => console.log(show))

//Create and array of numbers
let arrNum = [25,69,34,77,99, 28]
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = arr => arr.filter(n => n %2 ===0)

console.log(onlyEvens(arrNum))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert( sorted[1] + sorted[sorted.length -2])
    
}
sumSecondLowAndHigh([3,4,5,2,1])
//create an object
let stopWatch = {}

stopWatch.brand = "Nike"
stopWatch.color = "Grey"
stopWatch.shape = "Round"
stopWatch.size = "Large"

stopWatch.start = function () {
    console.log("STARTING")
}
stopWatch.stop = function () {
    console.log("STOPPPP")
}
stopWatch.sayBrand = function () {
    console.log("stopWatch.brand")
}
