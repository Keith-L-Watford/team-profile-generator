const Employee = require('./employee')

class Intern extends Employee {
    constructor (name, id, email, school, role){
        super(name, id, email)
        this.special = school;
        this.role = role;
    }
    getSchool(){
        return this.special;
    }
    getRole() {
        return "Intern";
    }
}






module.exports = Intern;