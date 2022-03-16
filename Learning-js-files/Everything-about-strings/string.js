// string functions
// usually when we need to join two small string we use + operator

const question = 'Whats your name?';
const answer = `My name is Harsh Patel`;

console.log(question+' --> '+ answer); // Whats your name? --> My name is Harsh Patel output

// concat operations

let str = 'string 1 is the profile info';

str = str.concat(' new string is ASCII');// concat join the new string into str.
console.log(str); //string 1 is the profile info new string is ASCII

console.log(str.length) // it willl give string length 
console.log(str.toUpperCase()) // convert string into an uppercase
console.log(str.toLowerCase())  // convert string into an lowercase

// indexing always start from zer0

console.log(str[34]); // it will print char which is stood at 34 in the string
// indexOf --> bydefault from begining
console.log(str.indexOf('ASCII')); // it will five me the index of ASCII's index from string --> 43
console.log(str.indexOf('dfssfds')); // it will return -1 as we don't have anu kind of sting like this
// lstindexOf from backwards
console.log(str.lastIndexOf('is')); // it will count string's index backwords.

// charAt is used when we want to pull out a char from the index
console.log(str.charAt(2)); // r as output

// endsWith always return boolval
console.log(str.endsWith('ASCII')); // return true if we have ASCII at the end of string else false
console.log(str.startsWith('dwsd')); // false

// includes check weather we have specific sting into index or not
console.log(answer.includes('is'));

// substing will find the string from the index according the rang input
console.log(answer.substring(5,11));

// slice is identical to substring however if we want to find word frome the backwords we give negative index
console.log(answer.slice(-6));

// split will divide index and return index's divided value into an Array
console.log(answer.split(' '));

// if we want to replace stings from index we use replace keyword
console.log(answer.replace('Harsh' , 'Viraj')); //however it will only replace first occurances
