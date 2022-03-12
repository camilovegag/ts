"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const userName = "Camilo";
let userAge = 22;
const printMsg = (msg = "hello world") => console.log(msg);
const hobbies = ["sports", "cooking", "dancing"];
const newHobbies = ["cars", ...hobbies];
const person = {
    firstName: "Max",
    age: "30",
};
const newPerson = Object.assign({}, person);
console.log(newPerson);
const sum = (...numbers) => numbers.reduce((a, b) => a + b);
const addedNumbers = sum(1, 2, 3, 4, 5);
console.log("The result is: " + addedNumbers);
const [hobby1, hobby2, ...otherHobbies] = hobbies;
const { firstName } = person, otherProps = __rest(person, ["firstName"]);
