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

let arrayOfFruits = ['apple','paw paw','orange','banana','quava','pear'];
for (let fruit of arrayOfFruits){
    console.log(fruit);
}

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers);
// let sum =0;
// for(let value of numbers){
//     sum = sum+value;
// }
// console.log(sum);

const numbers = [2, 5, 8, 11, 14, 17, 20];
// const evenarray =[];

// for (let value of numbers){
//     if(value%2==0){
//         // console.log(value)
//         evenarray.push(value);
//     }
// }
// console.log(evenarray)

// numbers.forEach((element) => console.log(element +=3));


numbers.forEach(function(element){
    console.log(element);
})