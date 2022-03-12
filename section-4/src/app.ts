// let & const have block scope, variable always avaliable in {} or nested.
const userName = "Camilo";

let userAge = 22;

// arrow functions.
const add = (a: number, b: number) => a + b; // implicit return statement.

console.log(add(2, 5));

const printMsg = (msg: string = "hello world") => console.log(msg); // default values must come last.

// spread operator ...
const hobbies = ["sports", "cooking", "dancing"];
const newHobbies = ["cars", ...hobbies];

// also exists on objects.
const person = {
  firstName: "Max",
  age: "30",
};

const newPerson = { ...person };

console.log(newPerson);

// rest parameters (...args)
const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b);

const addedNumbers = sum(1, 2, 3, 4, 5);
console.log("The result is: " + addedNumbers);

// array & objects destructuring.
const [hobby1, hobby2, ...otherHobbies] = hobbies;

const { firstName, ...otherProps } = person; // must have the same key name. Change with age: myAge.
