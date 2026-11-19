// // for loop

// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// // =====
// for (i=1;i<=6;i++){
//     console.log(i)
// }

// // ======
// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);



// ==============For Loop===========
// for(let i=1;i<=5;i++){
// console.log("I am learning JavaScript");
// }
// for(let i=1; i<=20;i++){
//     let j =[];
//     if(i%2==0){
//         j =+i;
//         console.log(j);
//     }
// }

// for(let i=10; i>=1;i--){
//     console.log(i)
//     if(i==1){
//         console.log('Happy man');
//     }
// }

// let count = 1;

// while (count <= 5) {
//     console.log(count);
//     count++;
// }

// // sum of numbers from 1 to 10;
// let sum=0;
// let number=1;
// while(number<=10){
//     sum += number;
//     number++;
// }
// console.log(sum);

// let i=1;
// do {
//     console.log("uwakmfon is a boy")
//     i++
// } while (i<=5);

// let numb = 10;
// do {
//     console.log(numb);
//     numb--;
// } while (numb <= 1);


// Exercises
// while loop
// do while loop

// while (condition) {
// //    code goes here 
// }

// let numb = 1;
// while(numb <= 10){
//     if(numb%2==0){
//         console.log(numb);
//     }
//     numb++;  
// }

// let bioData = {
//     name:"Moses",
//     age:25,
//     occupation:"student",
//     regNo:"25/EG/CO/102",
// }


// for(let key in bioData){
//     if(key == "occupation"){
//         console.log(bioData[key])
//     }
// }

// const MosesScores = {
//     mathematics: 80,
//     English: 75,
//     biology: 90,
//     chemistry: 85
// };

// let totalScore = 0;
// for (key in MosesScores){
//     totalScore += MosesScores[key]
// }
// // console.log(`The total score is ${totalScore}`);

// // console.log("Moses' final score is" , totalScore);
// // console.log('Moses final score is ' + "");

// let name ="Daniel";
// let age = 20;

// console.log("Hi, my name is " + name + ". I am " + age + " years old");

// let arrayOfFruits = ['apple','paw paw','orange','banana','quava','pear'];
// for (let fruit of arrayOfFruits){
//     console.log(fruit);
// }

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers);
// let sum =0;
// for(let value of numbers){
//     sum = sum+value;
// }
// console.log(sum);

// const numbers = [2, 5, 8, 11, 14, 17, 20];
// const evenarray =[];

// for (let value of numbers){
//     if(value%2==0){
//         // console.log(value)
//         evenarray.push(value);
//     }
// }
// console.log(evenarray)

// numbers.forEach((element) => console.log(element +=3));


// numbers.forEach(function(element){
//     console.log(element);
// })

// const numbers = [2, 5, 8, 11, 14, 17, 20];
// // array map 
// const multiplier = numbers.map(function(numb){
//     return numb * 2
// })
// console.log(multiplier);

// const names = ["john", "mary", "peter", "grace"];
// const upperCaseNames = names.map(function(name){
//     return name.toUpperCase()
// })
// console.log(upperCaseNames)

// let namer = "Moses";
// console.log(namer);

// function AddTwoNumbers(num1, num2){

// }
//  const age =26;
// function multiplicator(num1, num2){

// }

// function to greet users ; Simple calculator (function addNumbers(a, b) {}) ; function checkEligibility(age) {}
// function displayNumbers(limit) {
//     for (let i = 1; i <= limit; i++) {
//         console.log(i);
//     }
// }

// displayNumbers(5);




// function functionName(parameters) {
//     // code to be executed
// }

// function greetUser(name) {
//     console.log(`Hello, ${name}!`);
// }

// greetUser("moses");

// function to multiply two numbers 


// function cartTotal(array){
//     let total = 0;
//     array.forEach(element => {
//         total += element;
//     });
//     console.log(total);
// }

// cartTotal([100, 200, 300, 400, 500]);












// write a function that takes an array of numbers as input and
//  returns the sum of all the numbers in the array. 
// Use a for loop to iterate through the array and calculate the sum.

// function arrayTotal(array){
//     let total = 0;
//    array.forEach(function(element){
//         total = total + element;
//     })
//     console.log(total);
// }

// arrayTotal([1,2,3,4,5,6,7,8,9,10]);
//  expected result = 55;

// let names = ["moses", "kingsley", "john","Sam","Boss"];
// use an array.forEach loop to greet these individuals
// expected result = Good morning moses, Good morning kingsley, ...
// names.forEach(function(element){
//     console.log(`Good morning ${element}`)
// });

// let num =[1,2,3,4,5,6,6,7];
// let total = 0;
// num.forEach((element) => {
//     total = total + element;
// })
// console.log(total);



// let numbers = [300,10,5,2];
// let total = 400;
// for(let i=0; i < numbers.length; i++){
//    total = total - numbers[i]
// }
// console.log(total);

// use forEach loop to subtract elements and return the answer

// create an employee salary management system 
let employee = {
    name: "John Doe",   
    basicSalary: 100000,
    allowance: 20000,
    taxPercentage: 10
}

function calculateAnnualGrossSalary(basicMonthlySalary, basicMonthlyAllowance){
    let totalAnnualSalary  = basicMonthlySalary * 12;
    let totalAnnualAllowance = basicMonthlyAllowance * 12;

    return totalAnnualSalary + totalAnnualAllowance;
}

// console.log(calculateAnnualGrossSalary(employee.basicSalary, employee.allowance));


function calculateGrossSalary(basicMonthlySalary, basicMonthlyAllowance){
    return basicMonthlySalary + basicMonthlyAllowance;
}

// console.log(calculateGrossSalary(employee.basicSalary, employee.allowance))

function calculateTax(grossSalary, taxPercentage){
    return grossSalary * (taxPercentage/100);
}
console.log(calculateTax(175000,8));

function calculateNetSalary( ){

}
console.log(calculateNetSalary(100000, 5));