const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let answer = [];

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});

convertBtn.addEventListener("click", () => {
  checkInput();
});

function checkInput() {
  output.innerText = "";
  if (input.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (input.value <= -1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (input.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    count(input.value);
    output.innerText = answer.reverse().join("");
    answer = [];
    return;
  };
};

const count = (input) => {
  console.log(input);
  if (input >= 1000) {
    count(input - 1000);
    answer.push("M");
  } else if (input >= 900) {
    count(input - 900);
    answer.push("CM");
  } else if (input >= 500) {
    count(input - 500);
    answer.push("D");
  } else if (input >= 400) {
    count(input - 400);
    answer.push("CD");
  } else if (input >= 100) {
    count(input - 100);
    answer.push("C");
  } else if (input >= 90) {
    count(input - 90);
    answer.push("XC");
  } else if (input >= 50) {
    count(input - 50);
    answer.push("L");
  } else if (input >= 40) {
    count(input - 40);
    answer.push("XL");
  } else if (input >= 10) {
    count(input - 10);
    answer.push("X");
  } else if (input >= 9) {
    count(input - 9);
    answer.push("IX");
  } else if (input >= 5) {
    count(input - 5);
    answer.push("V");
  } else if (input >= 4) {
    count(input - 4);
    answer.push("IV");
  } else if (input >= 1) {
    count(input - 1);
    answer.push("I");
  } else {
    return "0";
  }
  console.log(answer);
  return;
};