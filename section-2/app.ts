// unknown and never types.

let userInput: unknown;

userInput = "hi";
userInput = 3;

// if we do this...

let userName: string;

// it will fail. Unknown is a bit more restrictive than any.

/* userName = userInput */

// so an extra check is required

if (typeof userInput === "string") {
  userName = userInput;
}

// never type

function generateError(message: string, errorCode: number): never {
  // a function that never return!!!
  throw { message, errorCode };
}

generateError("An error ocurred", 500);

// this function never produces a value

const result = generateError("An error ocurred", 600);
console.log("Error is: " + result);
