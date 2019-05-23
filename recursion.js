// Count to Ten
/*
Write a function, countToTen, that receives a number less than or equal to 10. countToTen should console.log every number between the given number and 10, including 10. Use recursion.
NOTE: The test for this function checks how many times you call console.log. If you use console.log for debugging purposes, that's great! But your test will likely fail, so comment out your console.logs when you want to see if you're passing the test!
countToTen(1);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
*/

function countToTen(num) {
  //base case
  if (num > 10) { 
    return 0; //not console.log() because we only want to print up to 10.
  } else { //recursive case
    console.log(num);
    countToTen(num + 1);
  }
}



// Backward String
/*
Write a function, backwardString, that receives a string. It should log every letter in the string, from the last character to the first. Use recursion.
NOTE: As with the last problem, the tests will check how many times console.log is called.
backwardString('happy');
// y
// p
// p
// a
// h
*/

function backwardString(str) {
  if (str.length === 0) { // base case
    return undefined;
  } else { // recursive case
    console.log(str[str.length - 1]);
    str = str.slice(0, str.length - 1);
    backwardString(str);
  }
}



// Sum Nums

/*
Write a function, sumNums, that takes a number greater than 1 and returns the sum of all the numbers between the given number and 1. Use recursion.
sumNums(3); // => 6 (3 + 2 + 1)
*/

function sumNums(num) {
  let sum = 0;
  if (num <= 1) { // base case
    return 1;
  } else { // recursive case
    sum = num + sumNums(num - 1);
    return sum;
  }
}



// Count Vowels
/*
Write a function, countVowels, that accepts a string and returns the number of vowels in that string. Use recursion.
countVowels('Four score and seven years'); // => 9
*/

function countVowels(str) {
  let numVowels = 0;
  const vowels = 'aeiouAEIOU';
  if (str.length === 0) {
    return numVowels;
  } else {
    if (vowels.includes(str[str.length - 1])) {
      numVowels += 1;
    }
    str = str.slice(0, str.length - 1);
    return numVowels + countVowels(str);
  }
}



// Is Palindrome
/*
A palindrome is a word that is spelled the same forward and backward. For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.
Write a recursive function, isPalindrome, to check if a string is a palindrome or not.
isPalindrome('Kayak'); // => true
isPalindrome('NEVERODDOREVEN'); // => true
isPalindrome('Tacocat'); // => true
isPalindrome('SELFLESS'); // => false
*/


function isPalindrome(str) {
  str = str.toLowerCase();
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    str = str.slice(1, str.length - 1);
    if (str[0] === str[str.length - 1]) {
      return true;
    }
    isPalindrome(str);
  }
}

isPalindrome('just testing it out you know') =>  false

// Always check what I'm returning. 
// The mistake here was not setting a condition to return TRUE.



// Array Sum
/*
Write a function, arraySum, that accepts an array of numbers and returns the sum of all the numbers in the array (no matter how nested!).
arraySum([1, [2, 3, [4]]]) // => 10
*/

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (Array.isArray(number)) {
      sum += arraySum(number);
    } else {
      sum += number;
    }
      console.log(Array.isArray(number));
  }
  return sum;
}

