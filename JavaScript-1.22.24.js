/*There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power: */
function alphabetWar(fight)
{
  const left_side={
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
  }
  
  const right_side={
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
  }
  
  let countRight = 0
  let countLeft = 0
  
  for(let char of fight){
    
    if(char in left_side){
      countLeft += left_side[char]
    }
    
    if(char in right_side){
      countRight += right_side[char]
    }    
    
  }
  
  
  if(countLeft > countRight){
     return "Left side wins!"
  }
 
  if (countLeft < countRight){
    return "Right side wins!" 
  }
    
   return "Let's fight again!";
}