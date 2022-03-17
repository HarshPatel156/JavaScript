console.log("if-else version controle");

const num = '234';

if (num == 34) {
    console.log(`you entered 34 as value`);
} 
else if(num === '234') { // === check type as well as value
    console.log('types and values are not being matched');
}
else{
    console.log('num is not 234');
}

const age =19;
const permition = false;

if (permition && age >= 19) { // && check both condition if anyconditon flase then it pass to else
    console.log("you are allowed to drink");
}
else if(permition || age >= 19){ // anyone condition needs to be true
    console.log("you are allowed to drink");   
}
else {
   console.log("sorry! you are under age");  
}

// turnery operator

console.log(age == 13 ? 'you are an adult' : 'you are under age');