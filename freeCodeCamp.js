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
