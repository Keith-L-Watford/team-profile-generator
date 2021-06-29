const Employee = require('./employee')

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email)
        this.special = school;
    }
    getSchool(){
        return this.special;
    }
    getRole() {
        return "Intern";
    }
}






module.exports = Intern;