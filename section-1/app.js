var input1 = document.querySelector("#num1");
var input2 = document.querySelector("#num2");
var btn = document.querySelector("#btn");
var add = function (num1, num2) { return num1 + num2; };
btn.addEventListener("click", function () { return console.log(add(+input1.value, +input2.value)); });
