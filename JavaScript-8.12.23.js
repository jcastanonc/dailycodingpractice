//Conditionals And Functions
/*You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees
 celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you
 whether or not charmander can battle */
//first convert fahrenheit to celcius
function tempInCelcius(temperature) {
    let convertedToCelcius = ((temperature - 32)*5) / 9
    return convertedToCelcius

}


function charParty(currentTemp) {
    let converted = tempInCelcius(currentTemp)
    if (converted >0){
    console.log("Charmander can battle.")
    }else{
    console.log("Charmander cannot battle.")
    }
}
charParty(33)