
// we use var, let, const key word to declare and initialize variables

/*
Variables Rules
--> can't start with numbers
--> can use _ or$ as well as letters to declare
--> they are case sensitive
--> no to try use _ or $ as they are reserved keyword in object oriented js.
*/

// Everyting about var keyword

var mark; // declaring variable
mark = 35; // initalizing variable
console.log(mark); // this statment will print the varible

var namel = 'Harsh Ka Patel'; // single quote means sting
var names = `Harsh' Ka/Patel`; // `` also used for stings however with backtick we can use special keywords inside the strings
console.log(names,namel);

// when we declare a varible and don't assign any value it will show undefined as a output.

// Everything about const keyword

const fName = 'Harsh'; // it works 
// fName = 'Viraj'; // throw an error message as const keyword prevent changes and we only initalize value once 
                 // once we initialize we can't change it
// const lname; // we have to initalize value of variable while declaring the variable else it shows an error
// lName = "Ka Patel"; // can't do that
console.log(fName);

// Evwrything about let keyword
// let keyword has a blockscope // block means {  }

let num = 45;
{
    let num = 39;
    console.log(num); // print 39
    num = 40;
    console.log(num); // print 40 as it over right 39
    // num variable dies here as it has a block scope
}

console.log(num); // prints 45 instead of 40 

/* most commean programming caseTypes

1. camelCase
2. PascalCase
3. kabab-case
4. snack_case

*/ 