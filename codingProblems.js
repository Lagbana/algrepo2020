// PROBLEM --> Reverse a string
// Method #1 - Using js built in functions
const reverseStringOne = (str) => str.split("").reverse().join("");
// console.log(reverseStringOne("Dustin"));
// Returns nitsuD

// Method #2 - Using a for loop
const reverseStringTwo = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};
// console.log(reverseStringTwo("Hyeonmi"));
// Returns imnoeyH

// PROBLEM --> Factorial (input n = !5) (output 5*4*3*2*1 (120))
// Method #1 - Using a loop
const factorialProduct = (num) => {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};
// console.log(factorialProduct(4));
// Returns 24

// PROBLEM --> Palindrome
// Method #1 - Using a stack
const isPalindrome = (str) => {
  let stack = [];
  let reversedStr = "";
  for (let letter of str) {
    stack.push(letter);
  }
  for (let letter of str) {
    reversedStr += stack.pop();
  }
  return str === reversedStr;
};
// console.log(isPalindrome("racecae"));
// Returns false

// Method #2 - Using built in methods
// .trim() removes spaces
const isPalindromeTwo = (str) => {
  const reg = /[\W_]/g;
  const smallStr = str.toLowerCase().replace(reg, "");
  const reversedStr = smallStr.split("").reverse().join("");
  if (smallStr === reversedStr) return true;
  return false;
};
// console.log(isPalindromeTwo("racecar "));
// Returns true

// PROBLEM --> Finding the longest string in a sentence
// Method #1 - for loop and build in method
const findLongestWord = (sentence) => {
  let longestWord = "";
  const arrayOfWords = sentence.split(" ");
  arrayOfWords.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};

// console.log(findLongestWord("The dog ate chicken for dinner"));
// Returns chicken

// PROBLEM --> Capitalize the first letter of each word in a title
// Method #1 - Using built in methods and a loop
const titleCase = (title) => {
  const arrayOfWords = title.toLowerCase().split(" ");
  for (let i = 0; i < arrayOfWords.length; i++) {
    arrayOfWords[i] =
      arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1);
  }
  return arrayOfWords.join(" ");
};

// console.log(titleCase("The story of dustin"));
// Returns The Story Of Dustin

// Method #2 - Using the map method
const titleCaseTwo = (title) => {
  const titled = title
    .toLowerCase()
    .split(" ")
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });
  return titled.join(" ");
};

// console.log(titleCaseTwo("The story of dustin"));
// Returns The Story Of Dustin

// PROBLEM --> Return the largest value from each array as an array
// Method #1 - Using the sort method
const largerstOfFour = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i].sort((a, b) => b - a);
    newArray.push(array[i][0]);
  }
  return newArray;
};

// console.log(
//     largerstOfFour([
//       [1, 8, 3, 13],
//       [2, 7, 9, 2],
//       [6, 1, 15, 5],
//     ])
//   );
// Returns [ 13, 9, 15 ]

// Method #2 - Using a nested for loop
const largerstOfFourTwo = (array) => {
  const largestValues = [];
  for (let i = 0; i < array.length; i++) {
    let maxValue = array[i][0];
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > maxValue) {
        maxValue = array[i][j];
      }
    }
    largestValues.push(maxValue);
  }
  return largestValues;
};

// console.log(
//   largerstOfFourTwo([
//     [1, 8, 3],
//     [2, 9, 2],
//     [6, 1, 5],
//   ])
// );
// Returns [ 8, 9, 6 ]

// PROBLEM - Check to see if a string ends with the target query
// Method 1 - built in methods and a for loop
const confirmEnding = (str, target) => {
  const alteredTarget = target.split("").reverse();
  const alteredStr = str.split("").reverse();
  let hasEnding = false;
  for (let i = 0; i < alteredTarget.length; i++) {
    if (alteredTarget[i] === alteredStr[i]) {
      hasEnding = true;
    } else {
      hasEnding = false;
    }
  }
  return hasEnding;
};

// console.log(confirmEnding("coffee", "pffee"));
// Returns false

// Method #2 - endswith built in method (Not allowed for this challenge)
const confirmEndingTwo = (str, target) => str.endsWith(target);

// console.log(confirmEndingTwo("coffee", "offee"));
// Returns true

// Method #3 - Using substrings
const confirmEndingThree = (str, target) => {
  const lengthDifference = str.length - target.length;
  const substring = str.substr(lengthDifference, target.length);
  return substring === target;
};

// console.log(confirmEndingThree("coffee", "affee"));
// Returns false

// Method #4 - Using substrings again
const confirmEndingFour = (str, target) => {
  return str.substr(-target.length) === target;
  // return str.slice(-target.length) === target;
};

// console.log(confirmEndingFour("giraffe", "ffe"));
// Returns true

// PROBLEM - take in a string and a number for the string to be repeated
// Method #1 Using a loop
const repeatString = (str, num) => {
  let repeatedString = "";
  if (num < 0) return "";
  else {
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
  }
  return repeatedString;
};

// console.log(repeatString("hi", -3));
// returns ''

// Method #2 Built in method
const repeatStringTwo = (str, num) => {
  let repeatedString = "";
  if (num < 0) return "";
  return str.repeat(num);
};

// console.log(repeatStringTwo("hi", 3));
// returns hihihi

// Method #3 Recursion
const repeatStringThree = (str, num) => {
  if (num < 0) return "";
  if (num === 1) return str;
  return str + repeatStringThree(str, num - 1);
};

// console.log(repeatStringThree("hello", 3));
// returns hellohellohello

// PROBLEM - truncate a string with length num including ... i.e ('Dustin went to the store'),14 => 'Dustin went...'

// Method #1 Using a while loop
const truncateString = (str, num) => {
  let i = 0;
  let truncatedStr = "";
  if (num >= str.length) return str;
  if (num <= 3) {
    while (i < num) {
      truncatedStr += str[i];
      i++;
    }
    return truncatedStr + "...";
  }
  while (i < num - 3) {
    truncatedStr += str[i];
    i++;
  }
  return truncatedStr + "...";
};
// console.log(truncateString("Dustin went to the store", 15));
// Returns Dustin went ...

// Method #2 Using a for loop
const truncateStringTwo = (str, num) => {
  let truncatedStr = "";
  if (num >= str.length) return str;

  if (num <= 3) {
    for (let i = 0; i < num; i++) {
      truncatedStr += str[i];
    }
    return truncatedStr + "...";
  }

  for (let i = 0; i < num - 3; i++) {
    truncatedStr += str[i];
  }
  return truncatedStr + "...";
};

// console.log(truncateStringTwo("Once upon a time there was a dog.", 13));
// Returns Once upon ...

// Method #3 Using the slice method
const truncateStringThree = (str, num) => {
  if (num >= str.length) return str;
  if (num <= 3) return str.slice(0, num) + "...";
  return str.slice(0, num - 3) + "...";
};
// console.log(truncateStringThree("Once upon a time there was a dog.", 100));
// Returns Once upon a time there was a dog.

// PROBLEM --> break down an array into smaller arrays with size (elements)
// Method 1 - Using the slice method
const chunkArrayInGroups = (arr, size) => {
  let finalArray = [];
  let i = 0;
  while (arr.length !== 0) {
    finalArray.push(arr.slice(0, size));
    arr = arr.slice(size);
    console.log(arr);
  }
  return finalArray;
};

// console.log(chunkArrayInGroups([1, 4, 6, 6, 5, 2], 2));
// Returns [ [ 1, 4 ], [ 6, 6 ], [ 5, 2 ] ]

// Method 2 - Using the splice method
const chunkArrayInGroupsTwo = (arr, size) => {
  let finalArray = [];
  let i = 0;
  while (arr.length !== 0) {
    finalArray.push(arr.splice(0, size));
  }
  return finalArray;
};

// console.log(chunkArrayInGroupsTwo([1, 4, 6, 6, 5, 2], 3));
// Returns [ [ 1, 4, 6 ], [ 6, 5, 2 ] ]

// Problem --> Remove a number of elements from the beginning of an array  denoted by"howMany"
// Method #1 - Returning what's left from the splice built in function
const slasher = (arr, howMany) => {
  arr.splice(0, howMany);
  return arr;
};
// console.log(slasher(["dan", "luke", "dustin"], 2));
// Returns ['dustin']

// Method #2 - Using a for loop
const slasherTwo = (arr, howMany) => {
  let slashedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= howMany) slashedArr.push(arr[i]);
  }
  return slashedArr;
};

// console.log(slasherTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
// Returns [9,10]

// Method 3 - While loop
const slasherThree = (arr, howMany) => {
  let slashedArr = [];
  let i = 0;
  while (i < arr.length) {
    if (i >= howMany) slashedArr.push(arr[i]);
    i++;
  }
  return slashedArr;
};

// console.log(slasherThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// Returns [6, 7, 8, 9, 10]

// Problem --> includes all of the letters in a string
// i.e ['hello','hey'] > false i.e ['alien', 'line'] > true

// Method #1 - Using indexOf
const mutation = (arr) => {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) === -1) return false;
  }
  return true;
};
// console.log(mutationTwo(["abc", "Ba"]));
// Returns true

// Method #2 - Using Includes
const mutationTwo = (arr) => {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  for (let letter of secondWord) {
    if (!firstWord.includes(letter)) return false;
  }
  return true;
};

// console.log(mutationTwo(["abc", "Da"]));
// Returns false

// PROBLEM -> takes in an array and returns all the truthy values
// Falsy values are false, null, 0, undefined, NaN
// Method #1 using the built in filter method
const bouncer = (arr) => arr.filter((item) => item);

// console.log(
//   bouncer([1, "hi", false, "", undefined, "josh", 0, 5, NaN, null, "abc"])
// );
// Returns [ 1, 'hi', 'josh', 5, 'abc' ]

// Method #2
const bouncerTwo = (arr) => {
  const truthValues = [];
  for (let element of arr) {
    if (element) truthValues.push(element);
  }
  return truthValues;
};

// console.log(
//   bouncer([1, "hi", false, "", undefined, "josh", 0, 5, NaN, null, "abc"])
// );
// Returns [ 1, 'hi', 'josh', 5, 'abc' ]

// PROBLEM find the spot where the number belongs in the array
const getIndexToInsert = (arr, num) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) return i;
  }
  return arr.length;
};

// console.log(getIndexToInsert([1, 2, 3, 4], 5));
// Returns 4

// PROBLEM - replace letters with other letters 13 letters apart A->N Z>M either add 13 or remove 13
// Method #1 using ASCIINUM
const rot13 = (str) => {
  let decodedString = "";
  for (let i = 0; i < str.length; i++) {
    let asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum < 78) {
      decodedString += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 95) {
      decodedString += String.fromCharCode(asciiNum - 13);
    } else {
      decodedString += str[i];
    }
  }
  return decodedString;
};

// console.log(rot13("AAA ZZZ 123"));
// Returns NNN MMM 123

// PROBLEM - sum all the numbers in a range
// Method #1 - Using sort
const sumAll = (arr) => {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumAll([5, 1]));
// Returns 15

// Method #2 - Using min /max
const sumAllTwo = (arr) => {
  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumAllTwo([6, 1]));
// returns 21

// PROBLEM -> take in two arrays and return one array minus values shared between two
const diffArray = (arr1, arr2) => {
  let newArray = [];
  arr1.forEach((item) => {
    if (!arr2.includes(item)) newArray.push(item);
  });
  arr2.forEach((item) => {
    if (arr1.indexOf(item) === -1) newArray.push(item);
  });
  return newArray;
};

// console.log(diffArray([1, 2, 3, 4, 5], [1, 7, 3, 9, 10, 11]));
// Returns[(2, 4, 5, 7, 9, 10, 11)];

const diffArrayTwo = (arr1, arr2) => {
  const newArray = arr1.concat(arr2);
  return newArray.filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
};

// console.log(diffArrayTwo([1, 2, 3], [1, 7, 11]));
// Returns [ 2, 3, 7, 11 ]

// PROBLEM -> Conver integer to a Roman Numeral
// Method #1 using an object to map values and loop over
const convertToRoman = (num) => {
  let romanStr = "";
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (let key in map) {
    while (num >= map[key]) {
      romanStr += key;
      num -= map[key];
    }
  }
  return romanStr;
};

// console.log(convertToRoman(1123));
// Returns MCXXIII

// PROBLEM -> Roman to integer

const romanToInt = (s) => {
  const mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (mapping[s[i]] < mapping[s[i + 1]]) {
      total += mapping[s[i + 1]] - mapping[s[i]];
      i += 1;
    } else {
      total += mapping[s[i]];
    }
  }

  return total;
};

// console.log(romanToInt("XXX"));
// Returns 30

// PROBLEM - function that takes in an array of objects(collection) and an object(source)
// Return a new array of objects if they have all of the same keys and values of the source
// Method #1 - Using two loops (filter and of loop)
const whatIsInAName = (collection, source) => {
  const keys = Object.keys(source);
  const newArray = collection.filter((object) => {
    for (let key of keys) {
      if (!object.hasOwnProperty(key) || source[key] !== object[key])
        return false;
    }
    return true;
  });
  return newArray;
};

// console.log(
//   whatIsInAName(
//     [
//       { a: 1, b: 2 },
//       { c: 4, d: 8 },
//     ],
//     { a: 1, b: 2 }
//   )
// );

// PROBLEM --> Replace the before substring in the string with the after substring If the first letter is capatalized, preserve that
// Method 1 using split and adding the strings together
const myReplace = (str, before, after) => {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  const splitString = str.split(before);
  return splitString[0] + after + splitString[1];
};

// console.log(
//   myReplace("A quick brown fox Jumped over the lazy dog.", "Jumped", "leaped")
// );
// Returns A quick brown fox leaped over the lazy dog.

// Method 2 using split, splice, indexOf and join
const myReplaceTwo = (str, before, after) => {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  const splitArray = str.split("");
  splitArray.splice(str.indexOf(before), before.length, after);
  return splitArray.join("");
};

// console.log(
//   myReplaceTwo(
//     "A quick brown fox Jumped over the lazy dog.",
//     "Jumped",
//     "leaped"
//   )
// );
// Returns A quick brown fox leaped over the lazy dog.

// Method #3 - Using The replace method
const myReplaceThree = (str, before, after) => {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
};
// console.log(
//   myReplaceThree(
//     "A quick brown fox Jumped over the lazy dog.",
//     "Jumped",
//     "leaped"
//   )
// );
// Returns A quick brown fox leaped over the lazy dog.

// PROBLEM --> Take in a string and translate it to piglatin
// If the first letter is a vowel add 'way' to the end
// Otherwise take the consonants, attach them to the end of the string and then ad 'ay'
// Method #1 using regex and slice
const translatePigLatin = (str) => {
  const firstVowel = str.match(/[aeiou]/);
  const firstPosition = str.indexOf(firstVowel);
  if (firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + "ay";
  }
  return str + "way";
};

// console.log(translatePigLatin("consonant"));
// Returns onsonantcay
