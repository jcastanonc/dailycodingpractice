/*The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).*/

function cockroachSpeed(s) {
  //get conversion calculation
  let conversion = 27.778 * s 
  //return the conversion formula through method Math.floor
  //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
  return Math.floor(conversion)
}
