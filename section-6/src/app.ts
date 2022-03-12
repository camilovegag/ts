type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection type.
type ElevatedEmploye = Admin & Employee;

const employee1: ElevatedEmploye = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Uinversal = Combinable & Numeric;

// type guards help us with union types.
function sum(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a} ${b}`;
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);
  // property in object. Acts as a type guard with objects.
  if ("privileges" in employee) console.log(`Privileges: ${employee.privileges}`);
  if ("startDate" in employee) console.log(`Start date: ${employee.startDate}`);
}

printEmployeeInformation(employee1);

class Car {
  drive() {
    console.log(`Driving...`);
  }
}

class Truck {
  drive() {
    console.log(`Driving a truck`);
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount} pounds`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // checks if some object is based on a given class.
  if (vehicle instanceof Truck) vehicle.loadCargo(100);
}

useVehicle(v1);
useVehicle(v2);

// discriminated union types.
interface Bird {
  type: "bird"; // literal type which hold a string with the word 'bird'.
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`${animal.type} moving at: ${speed} km/h`);
}

const hawk: Bird = {
  type: "bird",
  flyingSpeed: 60,
};

moveAnimal(hawk);

// type casting. Two ways, <Element> in front of element. Or as Element after the element.
// ! means that the expression in front of it will never yield null.
const userInputElement = document.querySelector("#user-input")! as HTMLInputElement;
userInputElement.value = "hey";

// index types.
interface ErrorContainer {
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

// function overloads.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a} ${b}`;
  }
  return a + b;
}
const result = add(1, 2);

// optional chaining. Helps us to access nested properties & nested objects.
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

console.log(fetchedUserData?.job?.title);

// nullish coalescing.
const userInput = null; // if this is null or undefined.
const storedData = userInput ?? "DEFAULT"; // then we will use the default value.
// const storedData = userInput || "DEFAULT"; this will use the default if userInput is falsy.

console.log(storedData);
