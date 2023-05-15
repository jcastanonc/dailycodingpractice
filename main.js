// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "enchiladas"
favFood = "chocolate"
//alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let aString = "love you"
//alert(aString.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takeThreeNum(n1,n2,n3){
    let sum = (n1/n2) * n3
    //alert(sum)
}

takeThreeNum(12,3,4)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function takeOneNum(n1) {
    console.log(Math.cbrt(n1))
}
takeOneNum(9)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month) {
    let monthLowerCase = month.toLowerCase()
    if (monthLowerCase === "june" || monthLowerCase === "july" || monthLowerCase === "august") {
        alert("YAY") 
    }else {
        alert("Booo")

}

}
//if had more time add all months then the else would say "not a month"
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function anyNum(num) {
    for (let i=1; i <=num; i++) {
    if (i % 5 !== 0)
    console.log(i)
}
}
anyNum(10)