const getStarted = document.getElementById("start-btn");
const doubleHeading = document.querySelector("#double-heading");
const mouseOverText = document.querySelector('#mouseover-text');
// const mouseOut = document.querySelector('#mouse-out');
// const parent = document.querySelector("#parent");

getStarted.addEventListener("click", function () {
    alert('button clicked')
});

doubleHeading.addEventListener("dblclick", () => alert("dbl clicked the header"));

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

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoItem = document.getElementById("todo-item").value;

    todoArray.push(todoItem);

    const li = document.createElement("li");

    todoArray.forEach((elem) => {
        li.textContent = elem;
        // ul.appendChild(li);
    })

});


// Assignment

// Changing HTML

// element.textContent (Plain Text Only)
// What it does: Sets or retrieves only the raw text inside an element and its descendants,
//  stripping out all HTML tags.

// When setting it: If you pass HTML tags(like < b > Hello</b >), the browser treats
//  them as literal text and displays the tags on the screen instead of rendering bold text.

// Best for: Safely updating text(e.g., user input, counters, headings) because it prevents
//  Cross - Site Scripting(XSS) attacks and is faster than innerHTML.


// element.innerHTML (Parses HTML Markup)
// What it does: Sets or retrieves the full HTML markup (tags + text) inside an element.

// When setting it: The browser parses the string as real HTML and renders new DOM
//  elements inside the container.

// Best for: Injecting formatted text or nested HTML structures—though you should never
//  pass untrusted user input directly into it.


// Changing CSS

// element.style is used to get or set inline CSS styles directly on a specific 
// HTML element using JavaScript.

// const myButton = document.querySelector("#submit-btn")
//myButton.style.backgroundColor = "blue";
//myButton.style.color = "white";

// Classes

// classList.add() is used to add one or more CSS classes to an HTML element 
// dynamically via JavaScript.

// classList.remove() is used to remove one or more CSS classes from an HTML
//  element dynamically via JavaScript.

// classList.toggle() is used to dynamically switch a CSS class on an HTML element—adding
//  the class if it is currently missing, or removing it if it is already present.

// classList.contains() is used to check whether an HTML element currently has a 
// specific CSS class applied to it.


// Creating Elements

// document.createElement() is a DOM method used to create a brand new HTML element
//  in memory using JavaScript before inserting it onto the page.

// append() (and its traditional counterpart appendChild()) is used to insert a newly created
//  element into the DOM, making it visible on the web page as a child of a specified parent element.

// element.remove() is a DOM method used to completely delete an HTML element from
//  the DOM and remove it from the web page.

const hera = document.getElementById("hera");
const paragraph = document.createElement("p");
paragraph.textContent= "lorem ipsum gyuudg gygdu gyhsuyx"
hera.append(paragraph);

