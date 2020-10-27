"use strict";

// let total = 0;
// let totalCounter = document.querySelector(".counter");

// let sodaButton = document.querySelector(".sodaButton");
// sodaButton.addEventListener("click", () => {
//   let sodaprice = parseFloat(sodaButton.getAttribute("data-price"));
//   total += sodaprice;
//   totalCounter.innerText = `Total : $${total}`;
//   console.log(total.toFixed(2));
// });

// let nutsButton = document.querySelector(".nutsButton");
// nutsButton.addEventListener("click", () => {
//   let nutsprice = parseFloat(nutsButton.getAttribute("data-price"));
//   total += nutsprice;
//   totalCounter.innerText = `Total : $${total}`;
//   console.log(total.toFixed(2));
// });

// let chocolateButton = document.querySelector(".chocolateButton");
// chocolateButton.addEventListener("click", () => {
//   let chocolateprice = parseFloat(chocolateButton.getAttribute("data-price"));
//   total += chocolateprice;
//   totalCounter.innerText = `Total : $${total}`;
//   console.log(total.toFixed(2));
// });

// let gummieButton = document.querySelector(".gummieButton");
// gummieButton.addEventListener("click", () => {
//   let gummieprice = parseFloat(gummieButton.getAttribute("data-price"));
//   total += gummieprice;
//   totalCounter.innerText = `Total : $${total}`;
//   console.log(total.toFixed(2));
// });

// totalCounter.innerText = `Total : $${total}`;

// problem number two
console.log("problem 2");

let makeMoney = document.querySelector(".makeMoney");
makeMoney.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(makeMoney);
  let howMany = formData.get("howMany");
  let whichCoin = formData.get("whichCoin");
  console.log(howMany, whichCoin);
});
``;
