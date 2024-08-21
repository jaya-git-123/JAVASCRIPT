//1. Using if. else, write the code which gets a number via prompt and then shows in alert: if the value is greater than zero, show 1 if less than zero, show-1 if equals zero, then show 0 In this task we assume that the input is always a number.  
let num=prompt("Enter the Number");
if (num > 0){
    alert(1);
}else if (num < 0){
    alert(-1);
}else{
    alert(0);
}
// *******************************************************************

// 2. Write an if condition to check that age is between 14 and 90 inclusively. "Inclusively" means that age can reach the edges 14 or 90.
let age=prompt("Enter your Age");
if (age>=14 && age<=90){  
    console.log("Age is within the range of 14 to 90 inclusively");
    console.log("*******************************************************")
}
// *******************************************************************


// 3. Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT I, the second one-without it.
// **********************(1)***************************************
let age=prompt("Enter your Age");
if (!(age>=14 && age<=90)){
    console.log("Age is NOT between 14 to 90 inclusively");
    console.log("*******************************************************");
}
// ***********************(2)******************************************
let age=prompt("Enter your Age");
if(age<14 || age>90);{
    console.log("Age is NOT between 14 to 90 inclusively");
    console.log("*******************************************************");
}
// *************************************************************************

// 4. Write the code which asks for a login with prompt. If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc-show "Cancelled", if it's another string-then show "I don't know you". The password is checked as follows: If it equals "TheMaster", then show "Welcome!", Another string-show "Wrong password", For an empty string or cancelled input, show "Cancelled" You can use nested if blocks if needed. Mind the overall readability of the code. Hint: passing an empty input to a prompt returns an empty string". Pressing ESC during a prompt returns null.
let login = prompt("Enter your login:");
if (login === "Admin"){
  let password = prompt("Enter your password:");
  if (password === "TheMaster"){
    alert("Welcome!");
  } else if (password === null || password === ""){
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (login === null || login === ""){
  alert("Cancelled");
} else {
  alert("I don't know you");
}





