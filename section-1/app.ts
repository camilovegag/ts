const input1 = document.querySelector("#num1")! as HTMLInputElement;
const input2 = document.querySelector("#num2")! as HTMLInputElement;
const btn = document.querySelector("#btn");

const add = (num1: number, num2: number) => num1 + num2;

btn.addEventListener("click", () => console.log(add(+input1.value, +input2.value)));
