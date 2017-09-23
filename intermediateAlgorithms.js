//intermediate algorithms
//Sum all numbers in a range
function sumAll(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sum = 0;

  for(var i = min; i <= max; i++){
    sum +=i;
  }
  return sum;
}
sumAll([1, 4]);

//Diff Two Arrays
function diffArr(arr1, arr2){
  return arr1.concat(arr2).filter(arr =>
    !arr1.includes(arr) || !arr2.includes(arr)
  )

  }

  diffArr([1,2,3,4],[1,2,3,4,5]);

  //Convert to Roman Numerals
  function convertToRoman(num) {

  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V",   "IV", "I"];
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  var romanized = "";

  for (var i = 0; i < decimals.length; i++){

    while (decimals[i] <= num){

      romanized += romanNumerals[i];
      num -= decimals[i];
    }
  }
  return romanized;
}
convertToRoman(99);

//Convert to Roman Numerals use map function
function convertToRoman(num) {

  var romanNumerals = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ],
    decimals = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];


  var romanized = "";

  decimals.map(function(decimal, i) {
      while (num >= decimal) {
        romanized += romanNumerals[i];
        num -= decimal;
      }
  });

 return romanized;
}

convertToRoman(36);

//Conver to Roman Numerals a single data structures
function convertToRoman(num) {
  
  var map = [
    { decimals:1, romanNumerals:'I' },
    { decimals:4, romanNumerals:'IV' },
    { decimals:5, romanNumerals:'V' },
    { decimals:9, romanNumerals:'IX' },
    { decimals:10, romanNumerals:'X' },
    { decimals:40, romanNumerals:'XL' },
    { decimals:50, romanNumerals:'L' },
    { decimals:90, romanNumerals:'XC' },
    { decimals:100, romanNumerals:'C' },
    { decimals:400, romanNumerals:'CD' },
    { decimals:500, romanNumerals:'D' },
    { decimals:900, romanNumerals:'CM' },
    { decimals:1000, romanNumerals:'M' }
  ];

  var romanized = '';

  while (num > 0) {

    var max = map[0];

    map.forEach(function(i) {
      if (i.decimals <= num) {
        max = i;
      }
    });

    romanized += max.romanNumerals;
    num -= max.decimals;

  }

  return romanized;
}

convertToRoman(6);


 //Wherefore art thou
function whatIsInAName(collection, source) {

  var arr = collection.filter(function(item){
    for(var i in source){
      if(source[i] != item[i]){
        return false;
        }
      }
    return true;
    });

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//Search and replace
function myReplace(str, before, after) {

  var index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()){

    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  str = str.replace(before, after);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "brown", "black");

//pig latin
function translatePigLatin(str){
    var vowel = /[aeiou]/gi;
    var pigLatin = "";

    //check if first character is a vowel
    if(str[0].match(vowel)){
        pigLatin = str + "way";
    }else{
        var vowelIndex = str.indexOf(str.match(vowel)[0]);

        pigLatin = str.substr(vowelIndex)+str.substr(0,vowelIndex) + "ay";
    }
    return pigLatin;
}
translatePigLatin("unmitigated");

//dna pairing
function pairElement(str) {

  return str.split("").map(function (dna) {
    if (dna === "A") {
      return ["A", "T"];
  } else  if (dna === "T") {
      return ["T", "A"];
  } else if (dna === "C") {
      return ["C", "G"];
    } else {
      return ["G", "C"];
    }
  });
}
pairElement("GCG");

//missing letter
function fearNotLetter(str){
    var letters = "abcdefghijklmnopqrstuvwxyz";
    letters = letters.split("");
    str = str.split("");

    for (var i = 0; i < str.length; i++){

        if(str[0] != "a"){
            return undefined
        }

        if (str[i] != letters[i]){
            return letters[i];
        }
    }
    return str;
}
fearNotLetter("abcdf");

// Boo Who
function booWho(bool) {

  if (typeof(bool) === "boolean"){

    return true;
  }else{
    return false;
  }
}
booWho(null);

//Sorted Union
function uniteUnique(arr){

  var uniteArr = [];

  for (var i = 0; i < arguments.length; i++){

       for(var j = 0; j < arguments[i].length; j++){

           if(uniteArr.indexOf(arguments[i][j])===-1){
               uniteArr.push(arguments[i][j]);
           }
       }
  }
  return uniteArr;
  }
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//HTML entities
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');
}
// test here
convertHTML("Dolce & Gabbana");

//Spinal Tap case
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

  return str.replace(/\s|_/g, '-');
}

spinalCase('This Is Spinal Tap');

//Sum All Odd Fibonacci Numbers....This took forever!!!
function sumFibs(num){

  var fib = [1, 1];

  Array.prototype.current = function(){
    return this[this.length-1];
    };

  Array.prototype.previous = function(){
    return this[this.length-2];
    };

  while(fib.previous()+fib.current() <= num){
    fib.push(fib.previous()+fib.current());
    }

  return fib.filter(function(item){
    return item % 2 !== 0;
    }).reduce(function(a, b){
      return a + b;
      });

  }
  sumFibs(21);

  //Sum all Primes
  function sumPrimes(num){

  var primes = [];
  for(var i = 2; i<= num; i++){
    if(isPrime(i)){
      primes.push(i);
      }
    }
    return primes.reduce(function(a, b){
      return a + b;
      });
}
  function isPrime(num){
    for(var j=2; j<num; j++){
      if(num % j === 0){
        return false;
        }
      }
      return true;
    }
    sumPrimes(10);

//smallest common multiple ...this took 2 days...there is an infinite loop
function smallestCommons(arr) {

 var low = Math.min(arr[0],arr[1]);
 var high = Math.max(arr[0],arr[1]);
 var range = [];
 var lcm = 0;
 var flag = true;

while(flag){
    lcm++;
    for(var j = low; j<=high; j++){
        if(lcm % j !== 0){
          break;
          }else if(j === high){
            flag = false;
            }
        }
      }
      return lcm;
}
smallestCommons([1,5]);

//Finder Keepers
function findElement(arr, func) {

  var num = 0;

  for (var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      num = arr[i];
      return num; // the return statement breaks after it gets the first even number returning 8
    }
  }
  //if the return num; statement is here it breaks after it gets to the end of the array, returning 10
}
findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });

//Drop it ....works with the times var // Whyyy!!!!
function dropElements(arr, func) {

    var times = arr.length;
    //use the variable times because the array is fixed and does not lessen by one when arr.shift is used
  for (var i = 0; i < times; i++) {

    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

//sides of a triangle
function triangles(side1, side2, side3) {
    function isInvalid(side) {
        return typeof side !== 'number';
    }

    if(isInvalid(side1) || isInvalid(side2) || isInvalid(side3)) throw new TypeError('Not a number');

    var len = Object.keys([side1, side2, side3].reduce((a,b) => { a[b] = (a[b] || 0) + 1; return a; }, {})).length;

    return len === 3 ? 'Scalene' :
           len === 2 ? 'Isosceles' : 'Equilateral';
}
triangles(2, 3, 4);

//sides of a triangle 2
function isTriangle(side1, side2, side3){

  function isInvalid(side) {
        return typeof side !== 'number';
    }

    if(isInvalid(side1) || isInvalid(side2) || isInvalid(side3)) throw new TypeError('Not a number');

    if(side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) throw new TypeError("cannot exist");

     return (side1 === side2 && side2 === side3) && 'equilateral' ||
  (side1 === side2 || side1 === side3 || side2 === side3) && 'isosceles' ||
  'scalene';
}
isTriangle(3, 3, 4);
}

//sides of a triangle 3 using conditionals refactored
function triangleType(side1, side2, side3) {
    if(isNotNumber(side1) || isNotNumber(side2) || isNotNumber(side3)) {
        throw new TypeError("Side(s) is not a number");
    }

    if(isValid(side1) || isValid(side2) || isValid(side3)) {
        throw new TypeError("Side cannot be 0 or less")
    }

    if(triangleInequality(side1, side2, side3)) {
        throw new TypeError("Triangle inequality error");
    }

    if (isEquilateral(side1, side2, side3)) {
        return "Equilateral triangle";
    }

    if(isIsosceles(side1, side2, side3)) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

function isNotNumber(side) {
    return typeof side !== 'number';
}

function isValid(side) {
    return side <= 0;
}

function triangleInequality(side1, side2, side3) {
    return side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2;
}

function isEquilateral(side1, side2, side3) {
    return side1 === side2 && side2 === side3;
}

function isIsosceles(side1, side2, side3) {
    return side1 === side2 || side1 === side3 || side2 === side3;
}

//Selling stock to make a profit
function getMaxProfit(arr) {
	var minIdx = 0;
    var maxIdx = 1;
    var currMin = 0;
    var maxProfit = 0;

    if(arr.length < 2) {
        throw new Error("Need atleast two time periods to be profitable!");
    }

    for(var i = 1; i < arr.length; i++) {

        // new current min.
        if(arr[i] < arr[currMin]) {
        	currMin = i;
        }

        // new best profit
        if(arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
                maxIdx = i;
            	minIdx = currMin;
        }
    }
    maxProfit  = arr[maxIdx] - arr[minIdx];
    return maxProfit;
}

var arr1 = [10, 7, 5, 8, 11, 9, 1];
var arr2 = [1];
console.log(getMaxProfit(arr1));
// returns 6 (buying for $5 and selling for $11)

//count occurences in a string
function count(params, str){
  var count = 0
  for (var i = 0; i<str.length; i++){
    if(str[i] === params){
      count++
      }
    }
    return count;
  }
  count("s","sessions");

  //find duplicates in an array
  //use object instead of nested double loop because the time complexity would be larger
  function duplicates(arr){
  var dup = [];
  var obj = {};
  for (var i =0; i<arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1;
      }else{
        //obj([arr[i]]);
        dup.push([arr[i]]);
        }
    }
    //return obj;
    return dup;
  }
  duplicates([1, 5, 3, 5, 3, 2, 4]);

  //Merge Cookies from interviewcake.com
  function mergeArr(arr1, arr2){

  return arr1.concat(arr2).sort(function(a,b){
    return a - b;
    });
  }
mergeArr( [3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]);
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

//streamroller
function steamrollArray(arr){

    var mergeArr = []; //empty array which will form new array

    //helper function
    function flatten(arr){
        //loop
        arr.forEach(function(item){
            if(!Array.isArray(item)){
                mergeArr.push(item); // if not an array push to mergeArr
            }else{
                flatten(item); //e.g[2], push to mergeArr
            }
        });
    }
    flatten(arr);
    return mergeArr;
}
steamrollArray([1, [2], [3, [[4]]]]);

//Binary agents (does not run on python studio)
function binaryAgent(str) {
    //split binary string into words or rather the binary that form a word. create empty sentence array.
    binStr = str.split(' ');
    word = [];
    //loop through str aka binStr
    for(var i =0; i < binStr.length; i++){
        //convert binary to string. String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
        word.push(String.fromCharCode(parseInt(binStr[i], 2))); // the 2 tells which base the numbers are.
    }
    return word.join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Binary agents mr Snow
function binaryAgent(str){

    return str.split(' ').map(function(binary){
        return String.fromCharCode(parseInt(binary, 2));
    }).join('');
}

//Binary agents (advanced solution)
function binaryAgent(str) {
    return String.fromCharCode(...str.split(" ").map(function(char)
    { return parseInt(char, 2); }));
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Everything be true
function truthCheck(collection, pre) {
    //create empty array
    var arr = [];
    //loop through collection array
    for (var i=0; i< collection.length; i++){
        //conditional compares item in collection array with pre and pushes to empty array arr[] if pre has no match
        if(!collection[i][pre]){
            arr.push(collection[i]);
        }
    }
    if(arr.length === 0){
        return true;
    }else{
        return false;
  }

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//Arguments optional
function addTogether(){
    //Create an array that slices arguments on each param
    var params = [].slice.call(arguments);
    //check if every param part is a number by iterating through with a function, if it isn't returning undefined
    if(!params.every(function(param){
        return typeof param === "number";
    })){
        return undefined;
    }
    //if array has two values add them together
        if (params.length === 2){
            return params[0] + params[1];
        }else{
            //store the first parameter
            var firstParam = params[0];
            //store a function that will take in the second parameter and using recursion call itself to add the values
            var addOneMore = function(secondParam){
                return addTogether(firstParam, secondParam);
            };
            return addOneMore;
        }
}
addTogether(2,3);

//Argument optional solution 2
function addTogether(){
    var check = function(num){
        return typeof num === "number" ? num : undefined;
    };
    var a = check(argument[0]);
    var b = check(argument[1]);
    if(arguments.length === 2){
        return a && b ? a + b : undefined;
    }else{
        if(a){
            return function(nextArg){
                return a && check(nextArg) ? a + nextArg : undefined;
            };
        }else{
            return undefined;
        }
    }
}
addTogether(2)(3);

//Second largest element in a binary search tree
function secondLargestBinary(){
    //define largest and 2nd largest elements as dummy nodes
  var largest = {
    value:null,
    };
    var secondLargest = {
      value:null,
      };
      //define inner function that takes node as parameter
      function search(node){
          //if current node is greater than largest node
        if(node.value > largest.value){
            //set 2nd largest equal to largest
          secondLargest = largest;
          //set current node equal to the largest
          largest = node;
          //else if current node is greater than 2nd largest
          }else if(node.value > secondLargest.value){
              //set 2nd largest equal to current value
            secondLargest = node;
            }
            //base case
            //if current value has no child nodes
            if(!node.left && !node.right){
              return
            }
            //recursive case
            //if current node has a right node
              if(node.right){
                  //search right node
                search(node.right);
                }else{
                  search(node.left);
                  }
        };
        //call search with the root node as the argument
        search(this.root);
        return secondLargest;
}
