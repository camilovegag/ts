// feature useful for Meta-Programming.
// create code easier for other developers.
// a decorator is a function you apply to something in a certain way.

// capital character.
function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

// decorator factories.
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const element = document.getElementById(hookId)! as HTMLDivElement;
        element.innerHTML = template;
        element.querySelector("h1")!.textContent = this.name;
      }
    };
  };
}

// decorator factories execute from bottom to top.
@Logger("Logging person")
@WithTemplate("<h1>hey</h1>", "app")
class Person {
  name: string = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);

// property decorator.
// if the target is an instance method, it refers to the prototype.
// if it is static, it refers to the constructor.
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target);
  console.log("Property name:", propertyName);
}

// accessor decorator.
function Log2(target: any, accessorName: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log("AccessorAccessor name:", accessorName);
  console.log(descriptor);
}

// method decorator.
function Log3(target: any, methodName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target);
  console.log("Method name:", methodName);
  console.log(descriptor);
}

// parameter decorator.
// methodName here refers to the name of the method where we use this parameter.
function Log4(target: any, methodName: string | Symbol, positionOfTheArgument: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log("Method name:", methodName);
  console.log(positionOfTheArgument);
}

class Product {
  @Log
  title: string;

  @Log2
  set price(value: number) {
    if (value > 0) this._price = value;
  }
  constructor(title: string, private _price: number) {
    this.title = title;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// when do decorators execute?
// when your class is defined. Can be used to to some behind the scenes work.

// a decorator to bind the object with this no matter where it was called.
function AutoBinder(_: any, __: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // this refers to whatever is reponsible of triggering the getter method.
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message = "This works!";
  @AutoBinder
  showMessage() {
    console.log(this.message);
  }
}
const printer = new Printer();
const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("click", printer.showMessage);

// decorators for validation.

interface ValidatorConfiguration {
  [property: string]: {
    [validatebleProperty: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfiguration = {};

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    [propertyName]: ["required"],
  };
}
function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    [propertyName]: ["positive"],
  };
}
function validate(object: any) {
  const objectValidatorConfiguration = registeredValidators[object.constructor.name];
  if (!objectValidatorConfiguration) return true;
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
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")! as HTMLFormElement;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = (<HTMLInputElement>document.getElementById("title")!).value;
  const price = +(<HTMLInputElement>document.getElementById("price")!).value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) alert("Invalid input, please try again.");

  console.log(createdCourse);
  courseForm.reset();
});
