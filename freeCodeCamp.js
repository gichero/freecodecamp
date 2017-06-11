//reverse a string
// function reverseString(str) {
//     //use three methods
//     //first split the string using the split method. do not include spaces between the quotes. this makes sure that every letter is split.
//     //reverse the string using the reverse method. This method reverses the order of the string from last to first.
//     //lastly join the string. This method joins the reversed string that was previously inverted using the reverse method.
//   return str.split("").reverse().join("");
// }
// reverseString("hello");
//
// //factorialize a number
// function factorialize(num) {
//   if (num < 0)
//     return -1;
//   if (num === 0)
//     return 1;
//   else
//     return(num * factorialize(num-1));
// }
// factorialize(5);
//
// //check for palindromes
// function palindrome(str) {
//   var re = /[\W_]/g;
//   var lowRegStr = str.toLowerCase().replace(re, '');
//   var reverseStr = lowRegStr.split('').reverse().join('');
//   return reverseStr === lowRegStr;
// }
// palindrome("eye");
//
// //find the longest word
// function findLongestWord(str) {
//   var arrayStr = str.split(' ');
//   var longWrd = arrayStr.sort(function(a, b){
//     return b.length - a.length;
//   });
//   return longWrd[0].length;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

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

  //Where do I belong
  function getIndexToIns(arr, num) {

 return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}
getIndexToIns([40, 60], 50);
