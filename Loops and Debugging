// Only Odd.js
// Define a function, onlyOdds, that accepts a number as an argument. onlyOdds should should return the sum of all the odd numbers between the given number and 1. If onlyOdds receives an argument less than 1, it should return 0.

function onlyOdds(num) {
  let sum = 0;
  if (num < 1) {
    return 0;
  } else {
    for (let i = 1; i <= num; i += 2) {
      if (i % 2 === 1) {
        sum += i;
      }
    }
  } return sum;
}

onlyOdds(6);

// Be careful not to put the return keyword inside the for loop, since the return keyword would end the execution of the function!
// Remember to declare the i for the initialization of the for loop using let or var.


// Crazy Caps.js
// Define a function, crazyCaps, that accepts a string as an argument. crazyCaps should return a string in which every other character is capitalized. The first letter should be lower-cased.

function crazyCaps(str) {
  let capString = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      capString += str[i].toLowerCase();
    } else if (i % 2 === 1) {
      capString += str[i].toUpperCase();
    }
  } return capString;
}

crazyCaps('Hi This is a Test');

// Be careful with the str.length and incrementing i.


// Bacteria Time.js
/*
Define a function, bacteriaTime, that accepts two arguments:
currentNum (num) - number of starting bacteria
targetNum (num) - desired number of bacteria
Assuming that the number of bacteria double every 20 minutes, bacteriaTime should return the number of minutes required for the number of bacteria to grow from the currentNum to a number equal to or larger than the targetNum. You can assume the currentNum will be a positive integer. If the targetNum is smaller than the currentNum, return the string 'targetNum must be larger than currentNum'.
*/

const bacteriaTime = (currentNum, targetNum) => {
  const interval = 20;
  let totalMinutes = 0;
  if (targetNum < currentNum) {
    return 'targetNum must be larger than currentNum'
  } else if (targetNum >= currentNum) {
    for (let i = 0; targetNum > currentNum; i++) {
      currentNum *= 2;
      totalMinutes += interval;
    }
  } return totalMinutes;
}

bacteriaTime(1,8);

// The for loop syntax: (initialize, condition, final expression): the condition does not need to use "i". 
// Just think of what condition should be met to end the loop. 
// A condition should be evaluated to true or false. => Or, just use a while loop! :)
