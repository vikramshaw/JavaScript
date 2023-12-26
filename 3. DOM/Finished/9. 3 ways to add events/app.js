// ----------- BAD WAY-----------
// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = function () {
//   console.log("Hello World");
// };

// // ----------- GREAT WAY-----------
// const best = document.querySelector(".best");

// best.addEventListener("click", () => {
//   console.log("Yellow");
// });

// // ----------- Event (e) Object -----------
// // It's an event object which contains information about perticular event.

// const para = document.querySelector(".para");

// para.addEventListener("click", (e) => {
//   console.log(e);
// });

const form = document.querySelector("form");
const input = document.querySelector("input");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
