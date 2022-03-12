// // what is Object-oriented Programming?

// // objects are the things you work with in code.
// // classes are blueprints for objects. How the object should look like, properties and methods.
// // objects can be instances of a class (if based on a class).

// class Department {
//   //   private name: string; // public is the default.
//   private employees: string[] = [];

//   //   constructor(name: string) {
//   //     this.name = name;
//   //   }

//   // a shorter way to initialize properties.
//   constructor(private readonly id: string, private name: string) {} // a readonly property can't be changed later on the code.

//   // type safety, when calling describe, the object must be a Department instance.
//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     // this.employees.push(employee);
//     this.employees = [...this.employees, employee];
//     console.log(employee, "added to employees");
//   }

//   printEmployeeInformation() {
//     console.log(
//       `The ${this.name} department has ${this.employees.length} ${
//         this.employees.length === 1 ? "employee" : "employees"
//       }.`
//     );
//     console.log(this.employees);
//   }
// }

// const accounting = new Department("d1", "Accounting");

// accounting.describe();

// // const accountingCopy = {
// //   name: "", // add name to avoid the warning.
// //   describe: accounting.describe,
// // };

// accounting.addEmployee("Max");

// accounting.printEmployeeInformation();

// accounting.addEmployee("Anna");
// // accounting.employees[2] = "Karl"; // unwanted behavior.
// // we only want one way to add employees.

// accounting.printEmployeeInformation();
