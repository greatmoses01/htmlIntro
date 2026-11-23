const getStarted = document.getElementById("start-btn");
const doubleHeading = document.querySelector("#double-heading");
const mouseOverText = document.querySelector('#mouseover-text');
// const mouseOut = document.querySelector('#mouse-out');
// const parent = document.querySelector("#parent");

getStarted.addEventListener("click", function(){ 
    alert('button clicked')
});

doubleHeading.addEventListener("dblclick", ()=> alert("dbl clicked the header"));

// mouseOverText.addEventListener("mouseover",()=>alert('text has a mouse over'));
// // mouseOut.addEventListener("mouseout",()=> alert("moved text out"));

// parent.addEventListener("mouseenter", () => {
//     alert("Mouse entered parent");
// });

// define and fetch the html elements
// define logic for submitting and rendering the todo items
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const ul = document.querySelector("ul");
const todoArray = []; 

todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    const todoItem = document.getElementById("todo-item").value;
    
    todoArray.push(todoItem);

    const li = document.createElement("li");

    todoArray.forEach((elem)=>{
        li.textContent = elem;
        // ul.appendChild(li);
    })
    
});


// Assignment

// Changing HTML
// element.textContent
// element.innerHTML

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

