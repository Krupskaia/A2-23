// Larger or Smaller
var number1 = parseInt(window.prompt("First number"), 10);
var number2 = parseInt(window.prompt("Second number"), 10);
if (number1 > number2) {
    window.document.write("The larger number is " + number1);
} else if (number2 > number1) {
    window.document.write("The larger number is " + number2);
} else {
    window.document.write("Both numbers are equal.");
}