"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} and I am ${this.age} years old.`);
    }
}
let user1 = new Person("Max", 22);
console.log(user1);
user1.greet("My name is");
