// there are two ways to declare or initialize an array

let val = [`Harsh Patel`, 19 , 'virsad', 'Gujarat', 388580, 26];
console.log(val);
let arr = new Array("Mityo", 19 , 1.5, 'friends');
// console.log(arr);
console.log(arr.length); // return array's length this .length is property
console.log(Array.isArray(val)); //this is a meathod
                                 // if variable is an arraytype it will retun ture else false

// Although we have const type array we can change the values of an Array
arr[0] = 'Viraj';
console.log(arr); //['Viraj', 19, 1.5, 'friends']

// array's methoads --> caution this meathod will modify orignal array
let mark = [23,45,67,35.7,6754,245,78];
mark.push(23); // it will add 23 at the end of an array
mark.unshift(98); // add 98 at 0th index
mark.shift(); // remove 98
mark.pop(); // remove 23 from index
mark.splice(3,6); // it starts to remove index from 3rd to 6th
mark.reverse() // it will reverse the array
console.log(mark);

mark = mark.concat(val); // this meathod will concat mark as well as val 
                         // we can't use concat meathod with const type of array 
                         // in order to impliment this meathod both arrays should be modifiable.
console.log(mark);

// objects in js

let objs = {
    'Full name' :'Harsh Vireshkumar Ka Patel',
    age : 19,
    DOB : '15 Jun 2002',
    Number: 293823829,
    list : ['cricket', 'football' , 'movies', '19 shades', 123]

}

console.log(objs); // return whole obj

// there are two ways to access individual members
console.log(objs.DOB); // return DOB 
console.log(objs['Full name']); // in objects when we have space in beteen strings we use this meathoad 
