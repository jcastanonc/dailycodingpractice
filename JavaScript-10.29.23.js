/*Your goal is to return a multiplication table for a number that is always an integer from 1 to 10. */
function multiTable(number) {
return [1,2,3,4,5,6,7,8,9,10].map(item => `${item} * ${number} = ${item*number}`).join('\n');
}
