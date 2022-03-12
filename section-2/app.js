// unknown and never types.
var userInput;
userInput = "hi";
userInput = 3;
// if we do this...
var userName;
// it will fail. Unknown is a bit more restrictive than any.
/* userName = userInput */
// so an extra check is required
if (typeof userInput === "string") {
    userName = userInput;
}
// never type
function generateError(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
var result = generateError("An error ocurred", 600);
console.log("Error is: " + result);
generateError("An error ocurred", 500);
// this function never produces a value
