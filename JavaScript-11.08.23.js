/*Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm. If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son."; */
function chromosomeCheck(sperm) {
  //parameters sperm XX or XY
  //return sex of baby
  if(sperm == "XX"){
    return "Congratulations! You're going to have a daughter."
  }else if(sperm == "XY"){
    return "Congratulations! You're going to have a son."
  }
}
