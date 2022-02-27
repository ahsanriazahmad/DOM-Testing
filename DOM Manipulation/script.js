// your JavaScript file

//select the element to add content too
const container = document.querySelector("#container");

//create a div with a class name 'content' and add text using textContent
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

//must add at the end if you want the created element to display
container.appendChild(content);

//create a <p> with red text that says “Hey I’m red!”
const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.cssText = "color: red";
container.appendChild(redText);

//an <h3> with blue text that says “I’m a blue h3!”
const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.cssText = "color: blue";
container.appendChild(blueText);

//Create a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const bigDiv = document.createElement("div");
bigDiv.style.cssText = "border: black; background: pink;";
container.appendChild(bigDiv);

const inDiv = document.createElement("h1");
inDiv.textContent = "I'm in a div";
bigDiv.appendChild(inDiv);

const inH1 = document.createElement("p");
inH1.textContent = "ME TOO!";
bigDiv.appendChild(inH1);
