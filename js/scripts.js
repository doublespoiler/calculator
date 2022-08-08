// business logic
function add(number1, number2) {
  return number1 + number2;
}

// interface logic
const number1 = parseFloat(prompt("Enter a number:"));
const number2 = parseFloat(prompt("Ener another number:"));

window.alert(add(number1, number2));
