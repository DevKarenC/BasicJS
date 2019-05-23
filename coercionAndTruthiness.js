// How Equal.js
// Define a function, howEqual, that accepts two arguments of any type. howEqual should return the string 'loosely' if the two values passed into the function are loosely equal. howEqual should return 'strictly' if the two values are strictly equal. howEqual should return the string 'not equal' if the two values are neither strictly nor loosely equal.

function howEqual (arg1, arg2) {
  if (arg1 === arg2) {
    return 'strictly';
  } else if (arg1 == arg2) {
    return 'loosely';
  } else if (arg1 != arg2 && arg1 !== arg2) { // no need to write it out. Can just write else {}
    return 'not equal';
  }
}

// remember that "strictly equal" should come first 


// Is Truthy.js
// Write a function isTruthy that accepts a single argument of any type. isTruthy should return true if that argument is 'truthy'. If the value is 'falsey', log out one of the messages below, corresponding to the type of the value tested.

function isTruthy(arg) {
  if (arg === undefined) {
    return `${arg} is falsey`;
  } else if (arg === false) {
    return `The boolean value ${arg} is falsey`;
  } else if (arg === null) {
    return `The ${arg} value is falsey`;
  } else if (arg === 0) {
    return `The number ${arg} is falsey (the only falsey number)`;
  } else if (arg === '') {
    return `The empty string is falsey (the only falsey string)`;
  }
  return true;
}

// template literal is so useful.
// if the value can be coerced to true, it's truthy!
// if (!!value) {return true;}


// My Or, My And.js
/*
Define a function, myOr, that accepts three arguments of any type.
myOr should return the same result as the buit-in || operator:
myOr(true, true, false) === (true || true || false); // => true
Then, define a function, myAnd, that accepts three arguments of any type.
myAnd should return the same result as the buit-in && operator:
myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true 
*/

const myOr = (arg1, arg2, arg3) => {
  if (arg1) {
    return arg1;
  } else if (arg2) {
    return arg2;
  }
  return arg3;
}

const myAnd = (arg1, arg2, arg3) => {
  if (!arg1) {
    return arg1;
  } else if (!arg2) {
    return arg2;
  }
  return arg3;
}

//remember than (arg1) in itself evaluates to true. So !arg1 would be evaluated to false.


// Only One.js
/*
Write a function onlyOne that accepts three arguments of any type.
onlyOne should return true only if exactly one of the three arguments are truthy. Otherwise, it should return false.
Do not use the equality operators (== and ===) in your solution.
onlyOne(false, false, true); // => true
onlyOne(0, 1, 2) // => false
*/

function onlyOne (arg1, arg2, arg3) {
  if (arg1 && !arg2 && !arg3) {
    return true;
  } else if (!arg1 && arg2 && !arg3) {
    return true;
  } else if (!arg1 && !arg2 && arg3) {
    return true;
  } else if (arg1 && arg2 && !arg3) {
    return false;
  } else if (arg1 && arg2 && arg3) {
    return false;
  } else if (arg1 && !arg2 && arg3) {
    return false;
  } else if (!arg1 && arg2 && arg3) {
    return false; 
  } else if (!arg1 && !arg2 && !arg3) {
    return false;
  }
}

//how to optimize the solution?
//we can put all the conditions that return false as part of the else statement!

function onlyOne (arg1, arg2, arg3) {
  if (arg1 && !arg2 && !arg3) {
    return true;
  } else if (!arg1 && arg2 && !arg3) {
    return true;
  } else if (!arg1 && !arg2 && arg3) {
    return true;
  }
		return false;
}


// Zero Dark Thirty.js
/*
Write a function zeroDarkThirty that accepts a number as an arguemnt. zeroDarkThirty should return a number with all of the zeroes removed:
zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23
If the number 0 is passed in as the argument, return NaN.
zeroDarkThirty(0) // => NaN 
*/

function zeroDarkThirty(num) {
  let noZero = '';
  if (num === 0) {
    return NaN;
  } 
  let str = num.toString();
  str = str.replace(/0/g, '');
  noZero = Number(str);
  return noZero;
}

// Used a new method .replace(searchValue, replaceValue).
// The method replaces the first instance of the searchValue, unless we specify /g for global instances.
