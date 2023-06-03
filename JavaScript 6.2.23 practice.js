//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

function calculateNumbers (randomNumbers) {
 sum = 0;
for (i =0; i < randomNumbers.length;i++){
    sum += randomNumbers[i];
}
alert(sum)
}
const randomNumbers = [1,5,7,87,36,23]
calculateNumbers(randomNumbers)
//alert( randomNumbers.reduce(acc, c) => acc + c, 0)
