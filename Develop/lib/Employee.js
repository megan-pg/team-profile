// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, title, id, email) {
        this.name = name;
        this.title = title;
        this.id = id;
        this.email = email;
    }
    getName() {
        return name;
    }
    getTitle() {
        return title;
    }
    getId() {
        return id;
    }
    getEmail() {
        return email;
    }
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;