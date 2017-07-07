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
function triangles(n1, n2, n3) {
    function isInvalid(n) {
        return typeof n !== 'number';
    }

    if(isInvalid(n1) || isInvalid(n2) || isInvalid(n3)) throw new TypeError('Not a number');

    var len = Object.keys([n1, n2, n3].reduce((a,b) => { a[b] = (a[b] || 0) + 1; return a; }, {})).length;

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

     return (side1 === side2 && side2 === side3) && 'equilateral' ||
  (side1 === side2 || side1 === side3 || side2 === side3) && 'isosceles' ||
  'scalene';
}
isTriangle(3, 3, 4);
}

//sides of a triangle 3 using conditionals
function isTriangle(side1, side2, side3){

  function isInvalid(side) {
        return typeof side !== 'number';
    }

    if(isInvalid(side1) || isInvalid(side2) || isInvalid(side3)) throw new TypeError('Not a number');

  if (side1 === side2 && side2 === side3){
    return 'equilateral';
    }
    if(side1 === side2 || side1 === side3 || side2 === side3){
      return 'isosceles';
      }
      else{
        return 'scalene';
        }
  }
isTriangle('string',4,4);


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

    function flatten(arr){

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
