// Say My Name
/*
Define an object, me, that has a name property and a getGreeting method. getGreeting should return a greeting.
console.log(me.name); // 'Kat'
me.getGreeting(); // => 'Hi, my name is Kat.'
*/

const me = {
  name: name,
  getGreeting: function() {
    return `Hi, my name is ${this.name}.`;
  }
}

// use return instead of console.log
// function(name) <- not necessary since we already call the name inside a function
// an arrow function will NOT work here, because it does something called 'lexical binding'. 
// if I want to use the 'this' keyword, I should use the function keyword.



// Say Your Name
/*
Create a new object, me2. Expand the myGreeting method from me so it accepts another object with a name property. The returned greeting should now greet the other object by name.
console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
*/

let you = {
  name: name
  };

const me2 = {
  name: name,
  getGreeting: function(you) {
    return `Hi ${you.name}, my name is ${this.name}.`;  
  }
}

//remember the scope rules. At first I placed the 'you' object inside the function. But when I ran the code, it said the variable 'you' was already declared. 



// Call Them All
/*
Write a function callThemAll, that, given an object and a value, calls every method in the object, passing in the value as the argument with each call.
callThemAll should return an array with all of the returned values from each method invocation. The order of the elements in the returned array does not matter.

let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

callThemAll(addNums, 100); // => [110, 120]
*/

const callThemAll = (obj, val) => {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'function') {
      arr.push(obj[key](val));
    }
  }
  return arr;
}



// Tic Tac Toe
/*
Define an object 'ticTacToe'.
Follow the test specs to create a 'board' property, 'move' method, and a 'clear' method so you can play a game with your partner.
The 'board' property is a grid of arrays that represents the board, where each cell is initiall null.
The 'move' method is a method that, given a character, rowNum, and colNum, adds the character to the correct cell in the board.
The 'clear' method should reset the board to all nulls.
To make it easier to play, have your 'move' method console.log() the board before the method returns the board.
*/

//hard-coded
const ticTacToe = {
  board: [[null, null, null], 
          [null, null, null], 
          [null, null, null]],
  move: function(char, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null) {
      this.board[rowNum][colNum] = char;
    }  
    console.log(this.board);
    return this.board;
  },
  clear: function() {
    this.board = [[null, null, null], 
                  [null, null, null], 
                  [null, null, null]];
    //console.log(this.board);
    return this.board;
  }
}
