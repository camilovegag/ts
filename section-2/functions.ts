// set the return type by adding : number after the parameters.
// ts can infer it.

function add(n1: number, n2: number) {
  return n1 + n2;
}

// type void if the function doesn't return something.

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// function types are types that describe a function.
// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(3, 4));

// callbacks

function callbackTs(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

callbackTs(2, 4, (result) => console.log("Result is: " + result));
