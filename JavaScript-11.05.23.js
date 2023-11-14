/*Inspired by the development team at Vooza, write the function that accepts the name of a programmer, and returns the number of lightsabers owned by that person. The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0. Note: your function should have a default parameter. */
function howManyLightsabersDoYouOwn(name) {
  //parameter name of a programmer
  //returns number of lightsabers owned by that person
  //example input --> Zach output --> 18
  if (name == "Zach"){
    return 18
  }else{
    return 0
  }
}
