/*  there are two types of data types
01> permitive datatypes 
   ==> system allocates memory in steack
    --> string
    --> numbers
    --> bool
    --> null
    --> undefine
    --> symbol
02> refrence datatypes
 ==> system allocates memory in heap
    --> Arrays
    --> object litrales
    --> functions
*/

// string

let fname = "Harsh";
console.log("My name is "+fname);
console.log("string dataType is "+(typeof fname));

// number
let val = 33;
console.log(" The value is "+ val);
console.log(" The dataType is "+(typeof val));

// bool
 fname = false;
console.log("The name is "+ fname);
console.log("The dataType is "+(typeof fname));

// null
fname = null;
console.log("The name is "+fname);
console.log("The dataType is "+(typeof fname));

// undefine
 fname = undefined;
console.log("The name is "+fname);
console.log("The dataType is "+(typeof fname));

// 02> refrance dataTypes

// arrays

let container = ["Harsh", 19, true, null];
console.log("The Container contain info of " + container);
console.log("The dataType is "+(typeof container));

// object litrales
let info ={

    fullName : 'Harsh Vireshkumar Ka Patel',
    Age : 19,
    isValid: true,
    city : "Toronto",
    jobTitle : `Web Developer`
}
console.log(info);
console.log("The dataType is "+(typeof info ));
