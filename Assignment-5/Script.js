// ----------------------TASK - 1 ----------------------------------------------------
//  ********** 1) Logical Operators ******************
//  1. Problem: Write a function that takes two boolean values and returns true if both are true,otherwise false.

let a = 10;
let b = 20;
if (a < b && b > a){
    console.log ("Execute code");
}else{
    console.log("False function");
}
console.log("*****************************************");


// 2.Problem: Write a function that checks if a number is between 10 and 20 (inclusive) using logical operators.

let num = + prompt("Enter number :");
if (num >= 10 && num <= 20){
    console.log("Number is between 10 to 20 inclusive");
}else{
    console.log("Number is not between 10 to 20");
}
console.log ("*****************************************");


// 3.Problem: Create a function that returns true if a number is either less than 5 or greater than 15.

let num = +prompt("Enter the number");
if (num < 5 || num > 15) {
    console.log("Number is either less than 5 or greater than 15");
} else {
    console.log("Number is not either less than 5 or greater than 15");
}
console.log ("*****************************************");


// 4.Problem: Write a function that takes two boolean values and returns true if exactly one of them is true.

let a = 13;
let b = 20;
if ( a > b || b > a){
    console.log("Execute code");
}
console.log ("********************************************");

// ----------------------------------------- TASK - 2 --------------------------------------------------------
// ************************* 2) Do, While. For Loops **********************
// 5. Problem: Write a for loop that prints numbers from 1 to 10.
 
for (let i = 1; i <= 10; i++) {
    console.log("For Loop===>", i);
  }
  console.log("**********************************************");


// 6.Problem: Create a while loop that prints even numbers from 2 to 20.

let i = 1;
while(i <= 20){
    if (i % 2 === 0){
        console.log ("Even numbers", i);
    }
    i++;
}
  console.log("**********************************************");


// 7.Problem: Write a do-while loop that prints numbers from 10 to 1.

let i = 10;
do {
    console.log("i===>", i);
    i--;
}while(i >= 1);
console.log("**********************************************");


// -------------------------------- 3) Switch statements ---------------------
/* 8.Coverts the below if-else into switch statements
let fruit = 'apple';
if (fruit === 'apple') {
 console.log('You chose an apple.');
} else if (fruit === 'banana') {
 console.log('You chose a banana.');
} else if (fruit === 'orange') {
 console.log('You chose an orange.');
} else {
 console.log('Unknown fruit.');
}
*/

let fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('You choose an apple');
    break;
  case 'banana':
    console.log('You choose a banana');
    break;
  case 'orange':
    console.log('You choose an orange');
    break;
  default:
    console.log('Unknown fruit');
}

// ------------------------------- 4) Functions --------------------------
// 10.Problem: Write a function that takes two numbers and returns their sum.

function addFunction (a , b){
    return a + b;
}
console.log(addFunction(10 , 20));

// 11.Problem: write a function expression that takes two number and returns the greater of the two.

let greater = function(a , b){
    return a > b;
}
console.log(greater(20,10));


// 12. Problem: Convert the following function into an arrow function:
// function add (a, b){
// return a + break;
// }

let addArrow = (a, b)=> {
    return a + b;
}
console.log(addArrow(10, 20));