// push, pop, unshift, shift, includes, indexOf, slice, splice, forEach, map, filter, find
const students =["john","mary","david"];
// push - adding item to the last index of the array
students.push("moses"); 
students.push("victor");
// console.log(students);

// pop - removes the last item in array
students.pop();
// console.log(students);

// unshift - Adds item to the front of the array
students.unshift("Utibe")
// console.log(students)

// shift - removes item from the front of the array
students.shift();
// console.log(students);



// SEARCHING AND CHECKING OF ARRAYS
// includes, indexOf

// console.log(students.includes("moses"));
// console.log(students.includes("utibe"));

// indexOf
// console.log(students)
// console.log(students.indexOf("moses"));



// Extracting & Editing in Place
// slice, splice

// slice(start, end)
// splice (start, deleteCount, ...items)
// console.log(students.slice(0,3));
students.push("kingsley","Aaron","Williams","Joy","Godwin");
// console.log(students);
students.splice(2,1,"Hosana", "Solomon","Sarah"); 
// console.log(students);

// forEach
students.forEach((element, index )=> {
    console.log(`${index + 1}. ${element}`)
});

// map - transforms every item into a new array
// console.log(students);
// console.log(students.map((student)=> `Welcome ${student}`));

const mosesChildren = ["Monday", "Tuesday", "Friday"];
// console.log(mosesChildren.map((elem)=>`${elem} Moses`));

// filter - keeps only the items that pass a test
console.log(students.filter((elem)=> elem.length <=5));
// [john,mary, sarah,]

// find - grabs the first matching element

console.log(students.find((element)=> element.length >5));
// console.log(students);


