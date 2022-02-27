//Method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

//Method 3 - Best
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

//Method 3 But Better
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// // METHOD 2
// btn.onclick = alertFunction;

// // METHOD 3
// btn.addEventListener("click", alertFunction);

// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
