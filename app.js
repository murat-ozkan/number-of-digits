//? ************** NUMBER OF DIGITS ************

let number = +prompt("Please enter a number");
let counter = 0;
console.log(typeof number);

if (isNaN(number)) {
  alert("Please enter a number");
} else {
  while (number >= 1) {
    number = number / 10;
    number = Math.trunc(number);
    counter = counter + 1;
  }
  alert(`The digit number: ${counter}`);
}

//? ************** by muratozkan ************
