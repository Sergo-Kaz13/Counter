"use scrict";

const blockCounter = document.querySelector(".block_counter");
const btnDec = document.querySelector(".btn_dec");
const btnRes = document.querySelector(".btn_res");
const btnInc = document.querySelector(".btn_inc");

let counter = 0;

blockCounter.innerText = counter;

btnDec.addEventListener("click", () => {
  counter--;
  blockCounter.innerText = counter;
});

btnInc.addEventListener("click", () => {
  counter++;
  blockCounter.innerText = counter;
});

btnRes.addEventListener("click", () => {
  counter = 0;
  blockCounter.innerText = counter;
});
