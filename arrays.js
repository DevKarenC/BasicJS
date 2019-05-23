// Odd Couple.js
/*
Define a function, oddCouple, that accepts an array of numbers as an argument.
oddCouple should return a new array with the first two odd numbers from the original array:
oddCouple([1, 2, 3, 4, 5]); // => [1, 3]

If fewer than two odd numbers exist in the original array, return an empty array or an array with the only odd number:
oddCouple([10, 15, 20]); // => [15]
oddCouple(2, 4, 6, 8); // => []
*/

function oddCouple(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      newArray.push(arr[i])
    }
  } return newArray.slice(0,2);
}



// My Includes.js
/*
Define a function, myIncludes, that accepts an array and a searchValue.
myIncludes should return true if the searchValue is an element in the array. Otherwise, myIncludes should return false.
Do not use the built-in .includes array method during this problem. Feel free to use it on any future problem though! Note that strings have an .includes method, too.
myIncludes([10, 20, 30], 20); // => true
myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false
*/

function myIncludes(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (searchValue === arr[i]) {
      return true;
    } 
  } return false;
}



// My Reverse.js
/* 
Define a function myReverse that accepts an array.
myReverse should return a new array with the elements in reverse order.
myReverse([1, 2, 3]);    // => [3, 2, 1]
Do not use the built-in .reverse method for this problem. You can use it on all future problems though! 
*/

const myReverse = arr => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  } return newArray;
}



// My Unshift.js
/* 
Write a function myUnshift that takes an array and a value of any type as arguments.
myUnshift should return a new array, with the given value as the first element in the new array.
myUnshift([1, 2, 3], 0); / => [0, 1, 2, 3];
Do not use the built-in .shift method for this problem! 
*/

function myUnshift(arr, val) {
  let newArray = arr.reverse();
  newArray.push(val);
  newArray.reverse();
  return newArray;
}


// Even and Odd
/* 
Define a function, evenAndOdd, that accepts an array.
evenAndOdd should return a new array. The first element in the new array should be an array with all of the even numbers from the original array. The second element in the new array should be an array with all of the odd numbers from the original array.
evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
*/

function evenAndOdd(arr) {
  let evenArray = [];
  let oddArray = [];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    } else if (arr[i] % 2 === 1) {
      oddArray.push(arr[i]);
    }
  }
  newArray = [evenArray, oddArray];
  return newArray;
}

//be careful with using 'i'!
//i is NOT equal to arr[i]



// Array Flattener
/*
Define a function, arrayFlattener, that accepts a two-dimensional array as an argument.
arrayFlattener should return a new, one-dimensional array.
arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
*/

const arrayFlattener = arr => {
  let flatArray = [];
  let tempArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      tempArray.push(arr[i]);
    } else if (Array.isArray(arr[i]) === true) {
      flatArray = tempArray.concat(arr[i]);
    }
  }
  return flatArray;
}



// Make Grid
/* 
Write a function makeGrid that accepts two arguments:
numColumns (number)
numRows (number)
makeGrid should return a two-dimensional array that represents a grid of the given dimensions.
makeGrid(3,4);
 => [[1, 2, 3],
     [1, 2, 3],
     [1, 2, 3],
     [1, 2, 3]]
*/

const makeGrid = (numColumns, numRows) => {
  let newArray = [];
  let row = [];
  for (let i = 1; i <= numColumns; i++) {
    row.push(i);
  }
  while (newArray.length < numRows) {
    newArray.push(row);
  }
  return newArray;
}

