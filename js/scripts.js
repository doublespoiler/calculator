// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function remainder(number1, number2) {
  return number1 % number2;
}

// interface logic
const number1 = parseFloat(prompt("Enter a number:"));
const number2 = parseFloat(prompt("Ener another number:"));

window.alert(
  number1 + " + " + number2 + " = " + add(number1, number2) + "\n" + 
  number1 + " - " + number2 + " = " + subtract(number1, number2) + "\n" +
  number1 + " * " + number2 + " = " + multiply(number1, number2) + "\n" +
  number1 + " / " + number2 + " = " + divide(number1, number2) + "\n" +
  number1 + " % " + number2 + " = " + remainder(number1, number2)
  );