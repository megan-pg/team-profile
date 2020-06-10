// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, title, id, email, github) {
        super(name, title, id, email);
        this.github = github;

    }
    getGithub() {
        return github;
    }
    getRole() {
        return "Manager";
    }

}


module.exports = Manager;