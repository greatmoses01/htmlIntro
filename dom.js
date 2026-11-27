const getStarted = document.getElementById("start-btn");
const doubleHeading = document.querySelector("#double-heading");
const mouseOverText = document.querySelector('#mouseover-text');
// const mouseOut = document.querySelector('#mouse-out');
// const parent = document.querySelector("#parent");
const intro =  document.querySelector(".intro");
// getStarted.addEventListener("click", function(){ 
//     alert('button clicked')
// });

if(intro.classList.contains("Tomorrow")){
    console.log("it contanis")
}else{
    console.log("It does not contain")
}

// doubleHeading.addEventListener("dblclick", ()=> alert("dbl clicked the header"));

// mouseOverText.addEventListener("mouseover",()=>alert('text has a mouse over'));
// // mouseOut.addEventListener("mouseout",()=> alert("moved text out"));

// parent.addEventListener("mouseenter", () => {
//     alert("Mouse entered parent");
// });

// define and fetch the html elements
// define logic for submitting and rendering the todo items

// const todoForm = document.getElementById("todo-form");
// const todoList = document.getElementById("todo-list");
// const ul = document.querySelector("ul");
// const todoArray = []; 

// todoForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     const todoItem = document.getElementById("todo-item").value;
    
//     todoArray.push(todoItem);

//     const li = document.createElement("li");

//     todoArray.forEach((elem)=>{
//         li.textContent = elem;
//         // ul.appendChild(li);
//     })
    
// });


// const paro = document.getElementById("paro");
// const paragraph = document.createElement("p");
// paragraph.textContent="lorem ipsum ase centric vahgur hgalbg buot"
// paro.append(paragraph) ;

const sectionTitle = document.getElementById("sectionT")
const sectionRmBtn = document.getElementById("sectionRmBtn")
// sectionTitle.remove();

sectionRmBtn.addEventListener("click", ()=>{
    sectionTitle.remove();
})

// Event Listeners and Javascript examples using them














// createElement
// append 
// textContent



// Assignment

// Changing HTML
// element.textContent
// element.innerHTML

getStarted.addEventListener("click", (event)=>{
    event.preventDefault();
    getStarted.classList.toggle("active");
});

// getStarted.classList.add("active");

// Changing CSS
// element.style

// Classes
// classList.add()
// classList.remove()
// classList.toggle()
// classList.contains()

// Creating Elements
// document.createElement()
// append()
// remove()

const service = document.querySelector(".service");
console.log(service.innerHTML);
service.style.backgroundColor="blue";
service.style.color="white";
service.style.margin="10px";
service.style.fontSize="20px";
