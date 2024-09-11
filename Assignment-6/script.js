// 1.Population check : 
// Given let population = 1_380_000_000;, check if the population is greater than 1 billion. Print "High Population" if true, otherwise print "Low Population."  

let population = 1_380_000_000;
if (population > 1_000_000_000) {
    console.log("High Population");             
} else {
    console.log("Low Population");
}   
console.log("****************************************");  

// 2.Round Down:
// Write a function that takes a decimal number and returns it rounded down to the nearest integer.Example: round Down(12.9) should return 12

console.log("Round down ====>", Math.floor(12.9));
console.log("****************************************");

// 3.Random number:
// Generate a random integer between 540 and 1000 and print the result.

console.log(Math.ceil(Math.random() * (1000 - 540)+ 540));
console.log("****************************************");

// 4.Person object
// Create an object person with properties name, age, and city. Print the name and city values from the object.

let person = {
    name : "Chan",
    age : 21,
    city : "Chennai"
}
console.log("Name ====>", person.name);
console.log("City ====>", person.city);
console.log("****************************************");

// 5.Add property:-
// Add a new property isStudent with the value true to the person object you created earlier. Print the updated object.

console.log("Updated-object ====>", person.isStudent = true);
console.log(person);
console.log("*************************************");

// 6.Find position:-
// Given the string let fruit = "banana";, find and print the position of the first occurrence of the letter 'a'.

let fruit = "banana";
console.log("Position of the first occurrence of the letter a ====>",  fruit.indexOf('a'));
console.log("*************************************");

// 7.Convert case 
// Write a function that takes a string and returns it in uppercase.Example: convert To Upper("hello") should return "HELLO".

let name = "kavi";
console.log("Upper case ====>", name.toUpperCase());
console.log("**************************************");

// 8.Check start 
// Check if the string "Hello, World" starts with the word "Hello". Print true or false based on the result.

let greetings = "Hello, World";
console.log("Check starts with the word Hello ====>", greetings.startsWith("Hello"));
console.log("****************************************");

// 9. Nested Object:
// Create an object employee with a nested address object that includes street, city, and zipproperties. Print the city from the address object.

let employee = {
    name: "Jack",
    age: 25,
    address: {
        street: "3rd street",
        city: "Chennai",
        zip: "57835"
    }
}
console.log("nested address object ====>", employee.address.city);
console.log("****************************************");

//  10.Last Character:
// Write a function that returns the last character of a given string.Example: getLastChar("javascript") should return "t".

let lastChar = "Welcome";
console.log("Last character ====>", lastChar.charAt(6));
console.log("****************************************");

// 11.Square calculation:
// Write a function that calculates and returns the square of a number.Example: square(4) should return 16.

console.log("Square of number ====>", Math.pow(5, 2));
console.log("****************************************");

//  12.Update Nested Object:
// Create an object car with properties brand, model, and features (which is a nested object). Update the features to change the fuel type to "electric" and print the updated car object.

let car = {
    brand: "Tesla",
    model: "Model 3",
    features: {
        fueltype: "Gasoline",
        transmission: "Automatic",
    }
}
car.features.fueltype = "Electiric";
console.log(car);
console.log("****************************************");

// 13.Extract Word:
// Write a function that extracts and returns the first word from the string "JavaScript is fun".

let word = "Javascript is fun";
console.log("First word ====>", word.slice(0, 10));
console.log("****************************************");

// 14.Integer check
// Write a function that checks if a given number is an integer. If it is, print "Integer", otherwise print "Not an Integer."

function checkInteger(Num) {
    if (Number.isInteger(Num)){
        console.log("Integer");
    } else {
        console.log("Not an Integer");
    }
}
checkInteger(10);
checkInteger(11.5);
console.log("****************************************");

// 15.Substring Search:
// Write a function that checks if the string "I love coding" contains the word "love." If it does, print "Substring found", otherwise print "Substring not found."

function checkSubstring(){
    let word = "I love coding";
    let substring = "love";
    if (word.includes("love")){
        console.log("Substring found");
    } else {
        console.log("Substring not found");
    }
}
checkSubstring();
console.log("****************************************");

// 16.Day Message:
// Write a function that takes a string representing a day of the week (e.g., "Monday") and returns a message based on the day. Use logic to return "Start of the week" for"Monday", "Midweek" for "Wednesday", and "Weekend" for "Saturday" and "Sunday."For other days, return "Regular day."

function dayMessage(week) {
    switch(week) {
        case "Monday":
            return "Start of the week";
        case "Wednesday":
            return "Midweek";
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Regular day";
    }
}
console.log(dayMessage("Monday"));
console.log(dayMessage("Tuesday"));
console.log(dayMessage("Wednesday"));
console.log(dayMessage("Saturday"));
console.log("****************************************");

// 17.Simple Calculator:
// Create an object calculator with two properties num1 and num2 and a method that returns the sum of num1 and num2.

let calculator = {
    num1: 10,
    num2: 20,
    add: function() {
        return this.num1 + this.num2
    }
}
console.log("Calculator ====>", calculator.add());
console.log("****************************************");

// 18.Random Numbers:
// Write a function that generates 5 random integers between 1 and 50 and prints each number.
 
function generateNumber() {
    for (i=1; i < 6; i++){
        let randomIntegerNumber = Math.floor(Math.random()* (50) + 1);
        console.log(randomIntegerNumber);
    }
}
generateNumber();
console.log("****************************************");

// 19.Book Object 
// Create an object book with properties title, author, and description. Write a function that checks if the description contains a specific word (e.g., "bestseller"), and if it does, update the object by adding a new property isBestseller with the value true.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel about the American Dream, listed as one of the bestsellers of all time"
    };
function checkBestSeller(book) {
    if (book.description.includes("bestsellers"));
    book.isBestseller = true;
}
checkBestSeller(book);
console.log(book);
console.log("****************************************");