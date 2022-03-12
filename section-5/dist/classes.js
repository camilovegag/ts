"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name, fiscalYear: this.fiscalYear };
    }
    addEmployee(employee) {
        this.employees = [...this.employees, employee];
    }
    printEmployees() {
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department (${this.id})`);
    }
}
const it = new ITDepartment("d2", ["Max"]);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get latestReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No report was found.");
    }
    set latestReport(value) {
        if (!value)
            throw new Error("Please add a valid value!");
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        return (this.instance = new AccountingDepartment("d2", []));
    }
    describe() {
        console.log(`Accounting Department (${this.id})`);
    }
    addEmployee(name) {
        if (name === "Max") {
            console.log(`Max can't be added to employees`);
            return;
        }
        this.employees = [...this.employees, name];
    }
    addReport(text) {
        this.reports = [...this.reports, text];
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = AccountingDepartment.getInstance();
accounting.latestReport = "Accounting report";
console.log(`Latest report is: ${accounting.latestReport}`);
const employee1 = Department.createEmployee("Max");
console.log(employee1);
