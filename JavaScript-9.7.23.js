/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!*/
function getSum( a,b )
{
   if(a==b) return a;
   let sum = 0;
   for(i=((a<b)?a:b);i<=((a<b)?b:a);i++)sum+=i;
   return sum;
}
