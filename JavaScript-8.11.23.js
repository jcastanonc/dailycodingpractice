/*Variables
You are getting ready to face Brock for the Boulder Badge. 
You want three pokemon on your team that each have evolved at least once. 
You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 
and evolves at level 7, and weedle which is at level 1 and evolves at level 7. 
Create three variables to store the number of rare candies each of your pokemon would need 
to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies 
that sums all the rare candies you would need. */

//name 3 variables to store # of rare candies ea. pokemon needs to evolve
let bulbasaurCandies = 16 - 5
let caterpieCandies = 7 - 1 
let weedleCandies = 7 - 1
let totalCandies = weedleCandies + caterpieCandies + bulbasaurCandies
console.log(totalCandies)