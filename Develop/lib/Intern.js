// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, title, id, email, github) {
        super(name, title, id, email);
        this.github = github;

    }
    getGithub() {
        return github;
    }
    getRole() {
        return "Intern";
    }

}


module.exports = Intern;