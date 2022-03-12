// abstract classes can't be instanciated (no new Department()).
abstract class Department {
  protected employees: string[] = []; // change private to protected. Property is no avaliable on extended classes.
  static fiscalYear = 2020;

  constructor(protected readonly id: string, protected name: string) {}

  // methods that can be accessed without a class instance. Also works with properties.
  static createEmployee(name: string) {
    return { name, fiscalYear: this.fiscalYear };
  }

  abstract describe(this: Department): void; // a shared method that must be added on each class inheritance.

  addEmployee(employee: string) {
    this.employees = [...this.employees, employee];
  }

  printEmployees() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(this: ITDepartment) {
    console.log(`IT Department (${this.id})`);
  }
}

const it = new ITDepartment("d2", ["Max"]);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get latestReport() {
    // name should be related to the property which is modifying.
    if (this.lastReport) return this.lastReport;
    throw new Error("No report was found.");
  }

  set latestReport(value: string) {
    if (!value) throw new Error("Please add a valid value!");
    this.addReport(value);
  }

  // singleton, ensures you always only have exactly one instance of a certain class.
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting"); // super must be called before setting this properties.
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) return this.instance;
    return (this.instance = new AccountingDepartment("d2", []));
  }

  describe(this: AccountingDepartment) {
    console.log(`Accounting Department (${this.id})`);
  }

  addEmployee(name: string) {
    // methods can be overrided
    // this.employees;  private properties are only accesible from inside the class it was defined.
    if (name === "Max") {
      console.log(`Max can't be added to employees`);
      return;
    }
    this.employees = [...this.employees, name];
  }

  addReport(text: string) {
    this.reports = [...this.reports, text];
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new AccountingDepartment("d1", []);
const accounting = AccountingDepartment.getInstance();

accounting.latestReport = "Accounting report";
console.log(`Latest report is: ${accounting.latestReport}`);

const employee1 = Department.createEmployee("Max"); // static method
console.log(employee1);
