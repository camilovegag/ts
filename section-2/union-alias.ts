// we can create our custom type.

// this is also a union type, because it uses |.
type Combinable = number | string;

const combine = (input1: Combinable, input2: Combinable) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return `${input1} ${input2}`;
  }
};

console.log(combine(3, 5));
console.log(combine("hello", "world"));

// literal types

let literal: "hello" | "world"; // this variable can only have value 'hello' or 'world' assigned.
literal = "hello";
literal = "world";
