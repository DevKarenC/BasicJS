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


//Exponentiate.js
/*
Write a function exponentiate that accepts two arguments:
base (number)
power (number)
exponentiate should return the result of raising the base by the power. Assume the power argument will always be an integer greater than or equal to zero. Don't forget that any number raised to the 0th power is equal to 1! Do not use the built-in Math.pow() method, but feel free to use it moving forward!
*/

const exponentiate = (base, power) => {
  let output = 1;
  if (power === 0) {
    return 1;
  } else if (power >= 1) {
    for (let i = 1; i <= power; i++) {
      output *= base; 
    }
  } return output;
}

exponentiate(3, 4);


// My Slice.js
/*
Write a function mySlice that accepts up to three arguments:
originalString (string)
startIdx (number, optional)
endIdx (number, optional)

mySlice should return a string. The returned string should be a copy of the original string. If the user defines a startIdx, the returned string should start at that index:
mySlice('slice and dice', 2)    // => ice and dice

If the user defined an endIdx, the returned string should end at the last index before the endIdx:
mySlice('slice and dice', 2, 5)    // => ice

If the user doesn't define either the startIdx or the endIdx, return the entire originalString:
mySlice('slice and dice')    // => slice and dice

You can assume the startIdx will always be less than or equal to the endIdx. Do not use the built in .slice string method. Feel free to use it in all future workshop problems, though! 
*/

function mySlice(str, num1, num2) {
  let strCopy = '';
  if (num1 === undefined && num2 === undefined) {
    return str; 
  } else if (num1 !== undefined && num2 === undefined) {
    for (i = num1; i < str.length; i++)
    strCopy += str[i]; 
  } else if (num1 !== undefined && num2 !== undefined) {
    for (i = num1; i < num2; i++)
    strCopy += str[i]
  } return strCopy;
}

mySlice('Coding is fun!', 10, 13);


// My Index Of.js
/*
Define a function, myIndexOf, that accepts three arguments:
source (string)
searchValue (string)
startIdx (number) - optional
If the source contains the searchValue, return the index at which the searchValue starts. If the searchValue appears more than once in the source, return the index from the first occurance of the searchValue. If the searchValue doesn't exist in the source, return -1.
If a startIdx is passed into the function, ignore any instances of the searchValue that occur before that index. If no startIdx is provided, start searching from the beginning of the source.
Do not use the built-in .indexOf string method in your answer. Feel free to use it in all future workshop problems though!
*/

const myIndexOf = (source, searchValue, startIdx = 0) => {
  for (let i = startIdx; i < source.length; i++) {
    let currentTerm = source.slice(i, i + searchValue.length);
    if (currentTerm === searchValue) {
      return i;
    }
  } return -1;
}

//the slice method allows us to search for the term which is the same length as the searchValue, instead of having to create a tempString.

