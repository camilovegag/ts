"use strict";
var _a;
const employee1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function sum(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return `${a} ${b}`;
    }
    return a + b;
}
function printEmployeeInformation(employee) {
    console.log(`Name: ${employee.name}`);
    if ("privileges" in employee)
        console.log(`Privileges: ${employee.privileges}`);
    if ("startDate" in employee)
        console.log(`Start date: ${employee.startDate}`);
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
    loadCargo(amount) {
        console.log(`Loading cargo... ${amount} pounds`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(100);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
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
const hawk = {
    type: "bird",
    flyingSpeed: 60,
};
moveAnimal(hawk);
const userInputElement = document.querySelector("#user-input");
userInputElement.value = "hey";
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return `${a} ${b}`;
    }
    return a + b;
}
const result = add(1, 2);
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: {
        title: "CEO",
        description: "My own company",
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
