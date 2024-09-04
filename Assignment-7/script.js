// 1. Write a function ‘dice’ that returns like a dice a random number between 1 and 6.

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  console.log("You rolled a " + rollDice());
  console.log("****************************************");

 // 2. Write a function ‘add’ that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'. Example: add('102+17') should return 119.

function add(task) {
    let numbers = task.split('+');
    let result = Number(numbers[0]) + Number(numbers[1]);
    return result;  
}
console.log(add("102+17")); 
console.log("****************************************");

// 3. Write a function ‘nand’ that takes two Boolean values. If both values are ‘true’, the result should be ‘false’. In the other cases the return should be ‘true’. I.e.: The call nand(true, true) should return ‘false’. The calls nand(true, false), nand(false, true) and nand(false, false) should return ‘true’.

function nand(a,b){
    if (a && b) {
        return false;
} else {
    return true;
}
}
console.log(nand (true,true));
console.log(nand (false,true));
console.log(nand (true,false));
console.log(nand (false,false));
console.log("****************************************");

// 4. Write a function ‘isEven’ that checks if a passed number is even. If the given number is even, ‘true’ should be returned, otherwise ‘false’. Example: isEven(2) should return ‘true’ and isEven(3) should return ‘false’.

function isEven() {
    let num = arguments[0];
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }    
}
console.log(isEven(6));
console.log(isEven(3));
console.log("****************************************");

// 5. Write a function ‘unequal’ that checks 3 values for strict inequality. The function should return ‘true’ if all three parameters are strict unequal. Otherwise ‘false’. Example: unequal(1, 2, 3) should return ‘true’ and unequal(1, 1, 2) should return ‘false’.

function unequal(a, b, c) {
    if (a !== b && b !== c && a !== c) {
        return true;
        } else {
            return false;
            }
}
console.log("Unequal value=>", unequal(1, 2, 3));
console.log("Unequal value=>", unequal(4, 5, 6));
console.log("Unequal value=>", unequal(7, 7, 7));
console.log("****************************************");

// 6. Write a function ‘isThreeDigit’ that checks if a number is greater than or equal to 100 and less than 1000. Example: isThreeDigit(500) should return ‘true’ and isThreeDigit(50) should return ‘false’.

function isThreeDigit() {
    let number = arguments[0];
    if (number >= 100 && number < 1000) {
        return true;
        } else {
            return false;
        }
}
console.log("Threedigit ==>", isThreeDigit("300"));
console.log("Threedigit ==>", isThreeDigit("30"));
console.log("****************************************");

// 7. Write a function ‘equals’ that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.

function equals() {
    let a = arguments[0];
    let b = arguments[1];    
    if (a == b) {
        return 'EQUAL';
        } else {
            return 'UNEQUAL';
            }
    }
console.log("Equal==>", equals(1, 1));
console.log("UnEqual==>", equals(1, 2));
console.log("****************************************");

// 8. Write a function ‘repdigit’ that determines whether a two-digit decimal is a ‘repdigit’ or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.

function repDigit() {
    let number = arguments[0];
    let str = number.toString();
    if (str[0] == str[1]) {
        return 'Repdigit!';
        } else {
            return 'No Repdigit!';
            }
}
console.log("Repdigit value==>", repDigit(33));
console.log("Repdigit value==>", repDigit(34));
console.log("****************************************");

// 9.Write a function ‘addWithSurcharge’ that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2. Example: addWithSurcharge(5, 15) should return 23.

function addWithSurcharge(value1, value2) {
    let surchargeone = value1 <=10 ? 1 : 2;
    let surchargetwo = value2 <=10 ? 1 : 2;
    return value1 + surchargeone + value2 + surchargetwo ;
}
console.log("Value==>", addWithSurcharge(5, 15));
console.log("****************************************");

// 10.Write a function ‘sumMultiples’ taking a natural number n and returning the sum of all multiples of 3 and of 5 that are truly less than n.Example: All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78. sumMultiples(20) should return 78.

function sumMultiples () {
    let n = arguments[0];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
            }
            }
            return sum;
}
console.log("Summultiples values==>", sumMultiples(20));
console.log("****************************************");