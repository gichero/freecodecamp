//reverse a string

//use three methods
//first split the string using the split method. do not include spaces between the quotes. this makes sure that every letter is split.
//reverse the string using the reverse method. This method reverses the order of the string from last to first.
//lastly join the string. This method joins the reversed string that was previously inverted using the reverse method.
function reverseString(str) {

  return str.split("").reverse().join("");
}
reverseString("hello");

//Reverse Array
function reverseArray(arr){
  var newArr = [];

  for (var i = arr.length-1; i>=0; i--){
    newArr += arr[i];
    }

    return newArr;
  }
  reverseArray([1,2,3,4,5]);

  //Reverse String
function reverseString(str){
      var newStr = "";
      for (var i = str.length-1; i>=0; i--){
          newStr +=str[i];
      }
      return newStr;
  }
reverseString("believe");

// factorialize a number
function factorialize(num) {
  if (num < 0)
    return -1;
  if (num === 0)
    return 1;
  else
    return(num * factorialize(num-1));
}
factorialize(5);

//factorize a number using for loop

function factorialize(num){
    if(num === 0 || num === 1){
        return 1;
    }

    for (var i=num-1; i>=1; i--){
        num = num * i;
    }
    return num;
}
factorialize(6);

//check for palindromes
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
palindrome("eye");

//check for palindromes using for  loop
function palindrome(str){
	  var strRe = /[\W_]/g;

	  str = str.toLowerCase().replace(strRe, "");

  for(var i = 0;  i < str.length/2; i++){

	    if(str[i] !== str[str.length-1-i]){
	      return false;
	      }
	  }
	      return true;

	  }
	  palindrome("wows");

//find the longest word
function findLongestWord(str) {
  var arrayStr = str.split(' ');
  var longWrd = arrayStr.sort(function(a, b){
    return b.length - a.length;
  });
  return longWrd[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Title case a sentence
function titleCase(str) {

   return str.toLowerCase().split(" ").map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
}).join(" ");
  }
titleCase("the path of the righteous man is beset");


//Repeat a string repeat a string
function repeatStringNumTimes(str, num){
    var strRpt = '';

    while(num > 0){
        strRpt += str;
        num --;
    }
    return strRpt;
}
repeatStringNumTimes("abc", 3);

//recursively

function repeatStringNumTimes(str, num){
    if (num-1 < 0){
        return "";
    }
    else{
        return str + repeatStringNumTimes(str, num -1);
    }
}
repeatStringNumTimes("abc", 4);

//repeat method

function repeatStringNumTimes(str, num){
    if (num > 0){
        return str.repeat(num);
    }else{
        return "";
    }
}
repeatStringNumTimes("abc", 3);

//truncate a string
function truncateString(str, num) {

  if (num<=3){
    return str.slice(0, num) + "...";
  }
  if(num >= str.length){
    return str;
  }
  if(num < str.length){
    return str.slice(0, num-3) + "...";
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
 var newArr = [];

  for(var i=0; i<arr.length; i+=size){
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Slasher Flick
function slasher(arr, howMany) {
  arr.splice(0, howMany);

  return arr;
}

slasher([1, 2, 3], 2);

//Mutations
function mutation(arr) {

  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();

  for(var i=0; i<word2.length; i++){

    var value = word1.indexOf(word2[i]);

    if (value === -1){
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);

//Falsy Bouncer
function bouncer(arr) {

  return arr.filter(function(item){

      return item;

  });
}
bouncer([7, "ate", "", false, 9]);

//Seek and Destroy
function destroyer(arr) {

  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Reverse array
function reverseArr(arr){
  var newArr = [];
  for(var i= 0; i < arr.length; i++){
    newArr.push((arr[arr.length-1-i]));
    }
    return newArr;
  }
  reverseArr([1, 2, 3, 4, 5]);

  //or just simply do
  function reverseArray(arr){
      var newArr = [];
      for(var i=arr.length-1; i>=0; i--){
          newArr += arr;
      }
      return newArr;
  }
  reverseArray([1,2,3,4,5]);

  //Where do I belong
  function getIndexToIns(arr, num) {

 return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}
getIndexToIns([40, 60], 50);

//caesars cipher
//advanced code
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

//basic caesars cipher
function rot13(str) {

  return str.split('')

    .map.call(str, function(char) {

      x = char.charCodeAt(0);

      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      }

      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }

      return String.fromCharCode(x - 13);
    }).join('');

}
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
