function add(num1: number, num2: number, printResult: boolean, message: string) {
  if (printResult) {
    console.log(`${message}: ${num1 + num2}`);
  }
}

const number1 = 4; // type number
const number2 = 8;
const printResult = true; // type boolean
const message = "The result is"; // type string

add(number1, number2, printResult, message);
