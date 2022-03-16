console.log("Type conversation");

// casting sting into num
let val = '46'; // type is string
val = Number(val); // it cast string to number and  N should be capital.
console.log(val,(typeof val));

// casting num into string
let lval = 342; // number type
lval = String(lval); // this will convert to string
console.log(lval,(typeof lval));

// casting date into string

let date = new Date(); // this will show cauurent date and time into numbers
date = String(date);
console.log(date,(typeof date));

// casting bool into string

let boolVal = false;
boolVal = String(boolVal);
console.log(boolVal,(typeof boolVal));
boolVal = Number(boolVal);
console.log(boolVal,(typeof boolVal));

// casting Array to string
let values = ['34',453,'342',34,22];
values = String(values); // it converts elments of array into string
console.log(values,(typeof values)); // if we want array lenth use values.lengt
console.log(values.length,(typeof values));

// TO STRING FUNCTION

let nums = 45;
console.log(nums.toString());

nums = true;
console.log(nums.toString());

nums = new Date();
console.log(nums.toString());

// parsInt and parsFloat
let va = parseInt("34.5974"); // it will round and show 34 as a output
console.log(va);

va = "34.5985";
va= parseFloat(va); // convert into float number
console.log(va);
console.log(va.toFixed(3)); // it will round upto three decimal point.

//type coercosn

let numsf = "345657";
val = 56;
console.log(numsf + val); // output would be 34565756 as it append 56 number type to the at the end of string

numsf = parseInt("345657");
console.log(numsf + val); // 345713
