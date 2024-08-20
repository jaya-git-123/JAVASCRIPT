// Users input
/*
1) Name
2) Age
3) Weight
4) Blood group
5) Blood Pressure
6) Diseases
7) Alcohol
*/

let name = prompt("Enter your Name:");
let age = Number(prompt("Enter your Age:"));
let weight = Number(prompt("Enter your Weight:"));
let bloodGroup = prompt("enter your blood group:",true);
let bloodPressure = Number(prompt("Enter your BloodPressure Level:"));
let diseases = prompt("Do you have any Diseases?",false);
let alcohol = prompt("Do you consume Alcohol?",false)

console.log(` Name :${name}, Age :${age}, Weight :${weight}, BloodPressure :${bloodPressure}, Diseases :${diseases}, Alcohol :${alcohol} `)

//else if
if(age < 20){
    console.log ("You are not eligible to donate blood due to age")
}else if (bloodGroup == false) {
    console.log("You are not eligible,Blood group is not matching")
}else if(weight < 50){
    console.log ("You are not eligible to donate blood due to low Weight")
}else if(bloodPressure >100){
    console.log ("You are not eligible to donate blood due to higher BloodPressure")
}else if(diseases ==true){
    console.log("You are not eligible to donate blood due to Diseases")
}else if(alcohol ==true){
    console.log("You are not eligible to donate blood due to Alcohol consumption")
}else{
    console.log("You are eligible to Donate Blood")
}
console.log("*******************************************************")