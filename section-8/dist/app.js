"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    return (constructor) => {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Rendering template");
                const element = document.getElementById(hookId);
                element.innerHTML = template;
                element.querySelector("h1").textContent = this.name;
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("Logging person"),
    WithTemplate("<h1>hey</h1>", "app")
], Person);
const person = new Person();
console.log(person);
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target);
    console.log("Property name:", propertyName);
}
function Log2(target, accessorName, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log("AccessorAccessor name:", accessorName);
    console.log(descriptor);
}
function Log3(target, methodName, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log("Method name:", methodName);
    console.log(descriptor);
}
function Log4(target, methodName, positionOfTheArgument) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log("Method name:", methodName);
    console.log(positionOfTheArgument);
}
class Product {
    constructor(title, _price) {
        this._price = _price;
        this.title = title;
    }
    set price(value) {
        if (value > 0)
            this._price = value;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
function AutoBinder(_, __, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        },
    };
    return adjustedDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBinder
], Printer.prototype, "showMessage", null);
const printer = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", printer.showMessage);
const registeredValidators = {};
function Required(target, propertyName) {
    registeredValidators[target.constructor.name] = {
        [propertyName]: ["required"],
    };
}
function PositiveNumber(target, propertyName) {
    registeredValidators[target.constructor.name] = {
        [propertyName]: ["positive"],
    };
}
function validate(object) {
    const objectValidatorConfiguration = registeredValidators[object.constructor.name];
    if (!objectValidatorConfiguration)
        return true;
    let isValid = true;
    for (const property in objectValidatorConfiguration) {
        for (const validator of objectValidatorConfiguration[property]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!object[property];
                case "positive":
                    isValid = isValid && object[property] > 0;
                default:
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const price = +document.getElementById("price").value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse))
        alert("Invalid input, please try again.");
    console.log(createdCourse);
    courseForm.reset();
});
