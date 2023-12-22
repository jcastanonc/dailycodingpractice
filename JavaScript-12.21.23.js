//making async look better and easier to read
async funcion getPaid(){
    const houseOneWait = await houseOne()
    const houseTwoWait = await houseTwo()
    const houseThreeWait() = await houseThreeWait()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}
getPaid()