
// console.log("Hello world");
// //alert()


// const grade = 59;

// if (grade >= 70) {
//     console.log("You got an A");
// }
// else if (grade >= 60 && grade < 70) {
//     console.log("You got a B");
// }
// else if (grade >= 50 && grade < 60) {
//     console.log("You got a C");
// }
// else if (grade >= 45 && grade < 50) {
//     console.log("You got a D");
// }
// else if (grade >= 40 && grade < 45) {
//     console.log("You got an E");
// }
// else {
//     console.log("You got an F");
// }

// let number = 10;
// if (number > 0) {
//     console.log("The number is positive");
// }
// else {
//     console.log("The number is negative");
// }

// let secnumber = 10;
// if (secnumber % 2 === 0) {
//     console.log(secnumber = "even");
// }
// else { console.log(secnumber = "odd"); }

// let temperature = 30;
// if (temperature > 30) {
//     console.log("it is a hot day");
// }
// else {
//     console.log("the weather is moderate");
// }

// let tetnumber = 2
// if (tetnumber > 0) {
//     console.log("the number is positive");
// }
// else if (tetnumber < 0) {
//     console.log("the number is negative");
// }
// else {
//     console.log("the number is zero");
// }

// let age = 48
// if (age < 13) {
//     console.log("Child")
// }
// else if (age >= 13 && age <= 19) {
//     console.log("Teenager")
// }
// else if (age >= 20 && age <= 59) {
//     console.log("Adult")
// }
// else {
//     console.log("Senior Citizen")
// }

// let num1 = 7;
// let num2 = 7;

// if (num1 > num2){
//     console.log("num1 is greater than num2");
// }
// else if (num1 < num2){
//     console.log("num2 is greater than num1");
// }
// else{
//     console.log("num1 and num2 are equal");
// }

// //for loop
// //for(initialize; condition; iterate){
// // }?

// let i=1;
// while (i<=10){
//     if (i) %2 = 0;
//     console.log(i);
//     i += 2;
// } break

// let b=10;
// while (b>=0){
//     console.log(b)
//     b--;
// }

// let current=1
// while (current*=2){
//     console.log(current)
//     current===1000
// }

// function multiply (a, b) {
//     return a*b
// }
// console.log(multiply(4,5));

// function arrayTotal(array){
//     array.forEach(function(element){

//     })
// }



// array([1,2,3,4,5,6,7,8,9,10])

// let num = [300, 10, 5, 2];
// let total = 0;
// num.forEach((element) => {
//     total = total - element;
// })
// console.log(total);

// let employee = {
//     name: "John Doe",   
//     basicSalary: 100000,
//     allowance: 20000,
//     taxPercentage: 10
// }

// function calculateAnnualGrossSalary(basicMonthlySalary, basicMonthlyAllowance){
//     let totalAnnualSalary  = basicMonthlySalary * 12;
//     let totalAnnualAllowance = basicMonthlyAllowance * 12;

//     return totalAnnualSalary + totalAnnualAllowance;
// }

// // console.log(calculateAnnualGrossSalary(employee.basicSalary, employee.allowance));


// function calculateGrossSalary(basicMonthlySalary, basicMonthlyAllowance){
//     return basicMonthlySalary + basicMonthlyAllowance;
// }

// // console.log(calculateGrossSalary(employee.basicSalary, employee.allowance))

// function calculateTax(grossSalary, taxPercentage){
//     return grossSalary * (taxPercentage/100);
// }
// console.log(calculateTax(175000,8));

// function calculateNetSalary(grossSalary, taxPercentage){
//     return grossSalary - (grossSalary * (taxPercentage/100))

// }
// console.log(calculateNetSalary(100000, 5))

let customer  ={
name: "John Doe",
meterNumber: 12345,
unitsConsumed: 105,
costPerUnit: 100,
serviceCharge: 150,
}

function calculateElectricityBill (unitsConsumed, costPerUnit, serviceCharge){
    return (unitsConsumed * costPerUnit) + serviceCharge;
}
 console.log(calculateElectricityBill(customer.unitsConsumed, customer.costPerUnit, customer.serviceCharge));













