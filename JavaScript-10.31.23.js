/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case. */
function isTriangle (a, b, c) {
if ((a + b > c) && (a + c > b) && (b + c > a)) {
return true;
}
else {
if ((a <= 0) || (b <= 0) || (c <= 0)) {
return false;
}
else {
return false;
}
}
}
