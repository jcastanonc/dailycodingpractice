function abbrevName(name){
 let names = name.split(" ");
 let firstName = names[0].charAt(0).toUpperCase();
 let lastName = names[1].charAt(0).toUpperCase();
 let initials = firstName + "." + lastName
  return initials;
}