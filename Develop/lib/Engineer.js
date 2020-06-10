// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, title, id, email, github) {
        super(name, title, id, email);
        this.github = github;

    }
    getGithub() {
        return github;
    }
    getRole() {
        return "Engineer";
    }

}


module.exports = Engineer;