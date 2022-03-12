"use strict";
const button = document.querySelector("button");
button.addEventListener("click", () => alert("click"));
function logger(data) {
    console.log(data);
    if (data === "hola") {
        return data;
    }
}
logger("hey");
