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
  //recursion
    return (num * factorialize(num-1));
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
    //regular expression matches any non-word character. Equivalent to [^A-Za-z0-9_].
  var re = /[\W_]/g;
  //The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
palindrome("eye");

//check for palindromes using for  loop
function palindrome(str){
        //regular expression matches any non-word character. Equivalent to [^A-Za-z0-9_].
	  var strRe = /[\W_]/g;

	  str = str.toLowerCase().replace(strRe, "");

  for(var i = 0;  i < str.length; i++){

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
  //The sort() method sorts the elements of an array and returns the array
  var longWrd = arrayStr.sort(function(a, b){
    return b.length - a.length;
  });
  return longWrd[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Title case a sentence
function titleCase(str) {
    //The map() method creates a new array with the results of calling a provided function on every element in the calling array.
   return str.toLowerCase().split(" ").map(function(word) {
    //The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
    return word.replace(word[0], word[0].toUpperCase());
}).join(" ");
  }
titleCase("the path of the righteous man is beset");


//Repeat a string
function repeatStringNumTimes(str, num){
    var strRpt = '';

    while(num > 0){
        strRpt += str;
        num --;
    }
    return strRpt;
}
repeatStringNumTimes("abc", 3);

//using recursion

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
//i+= size sets the size of the new array
  for(var i=0; i<arr.length; i+=size){
    //The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
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
   //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
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

//Profile lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(firstName, prop){
//loop through the contacts list
  for(var i=0; i<contacts.length; i++){
     //conditional checks the property of each object
     if(contacts[i].firstName === firstName ){
       if(contacts[i].hasOwnProperty(prop)){
         return contacts[i][prop];
       }else{
         return "No such property";
       }
     }
  }
  return "No such contact";
}
lookUpProfile("Akira", "likes");
