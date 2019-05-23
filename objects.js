// Last Friday Night
/*
According to the song, Katy Perry "maxed our credit cards".
Define a function, lastFridayNight, takes an array of transactions.
lastFridayNight should return the total amount she spent last Friday night.
let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];
sumTransactions(transactions) // => 10512
*/

function lastFridayNight(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]['amount'];
  }
  return total;
}



// Compare Objects
/*
Define a function, compareObjects, that accepts two objects as arguments.
compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false. Assume the objects are not nested.
compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true
compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
*/

const compareObjects = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  for (let key in obj2) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
} 



// Leet Translation
/* "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".
Define a function called leetTranslator that take a string of normal characters.
leetTranslator should return a new string that is the translation of the original string into leet.
The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.
Leet Codex:
        A -> @
        B -> 8
        C -> (
        D -> |)
        E -> 3
        F -> ph
        G -> g
        H -> #
        I -> l
        J -> _|
        K -> |<
        L -> 1
        M -> |'|'|
        N -> /\/
        O -> 0
        P -> |D
        Q -> (,)
        R -> |2
        S -> 5
        T -> +
        U -> |_|
        V -> |/
        W -> |/|/'
        X -> ><
        Y -> j
        Z -> 2

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
translate('Fullstack')    // => 'ph|_|115+@(|<'
*/

function leetTranslator(str) {
  let leetCodex = {};
  let translation = '';
  str = str.toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    leetCodex[letters[i]] = leetChars[i];
  }
  for (let i = 0; i < str.length; i++) {
    translation += leetCodex[str[i]];
  }
  return translation;
}



// Pet Sounds
/*
Write a function petSounds that takes an animal name and a country name.
Using the globally-defined animalNoises array, petSounds should return a sentence that explains which sound the animal makes in the given country.
petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!
petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!
*/

let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

function petSounds(animalName, countryName) {
  for (let i = 0; i < animalNoises.length; i++) {
    if (animalName in animalNoises[i]) { // checking to see if the animal is a key in the animal object
      const name = animalName[0].toUpperCase() + animalName.slice(1) + 's';
      return `${name} in ${countryName} say ${animalNoises[i][animalName][countryName]}`
    }
  }
}

//when using console.log for debugging purposes, remember the scope limit and put it before the return statement.

