// usually we have three types of loops in js
// --> for , while and do while

// for loop

let arr = [34, 566, 74, 'Harsh', `Mit`, 'viraj', true, 23.45, 34];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element); // for loop simply prints every elments from arr.
}
// other way
arr.forEach(function(element){
    console.log(element);
}); // identical to for loop syentex

// while loop

while (arr) {
    console.log(arr);
    arr = false; // in order to exit from the loop.
}

let num = 1;

do {
    console.log(num + 1);
    num += 1;
} while (num < 12) // for sure do while loop runs at least once before it failed
               // as it check condition at the end of loop

///  object litrles 

let info = {
    'Full Name' : `Harsh Vireshkumar Patel`,
    Age: 19,
    position : 'full stack developer',
    company : 'TCS',
    Experence : '1 year'
}
for(let list in info){
    console.log(`The ${list} of object is ${info[list]}` );
}