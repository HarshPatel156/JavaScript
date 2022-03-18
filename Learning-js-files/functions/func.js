console.log(`Basic info of functions`);
// usually we use function to reduce repetitive logic in a code

// we have two syntex in order to declare a function
// 1st
function nums(arr = ['empty']){ // default value in case array is empty
     //we can also pass more than one parameter
    arr.forEach(element => {
        arr[element];
    }); // for loop
    return console.log(arr); // function's return alue is arr
}

let num = [12,`13`,34,5647,'3422']
let val;
nums(num); // this will call nums function at line 4
           // one by one print the array's elements
nums(val); // return empty in output
           // as we set default perameter as empty
           // else it return undefine as a output

// 2nd declare function as a variable
 let Names = function (arr = ['empty']){ // default value in case array is empty
    //we can also pass more than one parameter
   arr.forEach(element => {
       arr[element];
   }); // for loop
   return console.log(arr); // function's return alue is arr
}

const friends = [`Garry`,'soumil',"alen",'Manish'];

Names(friends);


// creating function inside object

let personalInfo = {
    info : `Harsh Vireshkumar Patel`,
    age: 19,
    frien : function(){
       return 'Name';
    }
}
console.log(personalInfo.frien());

