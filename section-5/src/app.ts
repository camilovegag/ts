// an interface describe the structure of an object.
// interface ≠ type.
interface Named {
  readonly name: string; // just structure, not values.
  outputName?: string; // optional property.
  myMethod?(): void; // optional method.
  optionalParam?(text?: string): void; // optional parameter.
}

// you can extend multiple interfaces.
interface Greetable extends Named {
  greet(phrase: string): void;
}

// you can implement multiple interfaces.
class Person implements Greetable {
  constructor(public name: string, public age: number) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name} and I am ${this.age} years old.`);
  }
}

let user1 = new Person("Max", 22);

console.log(user1);

user1.greet("My name is");
