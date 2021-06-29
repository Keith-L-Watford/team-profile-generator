const Employee = require('./employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber, role){
        super(name, id, email)
        this.special = officeNumber;
        this.role = role;
    };
    getRole() {
        return "Manager";
    };
    
}






module.exports = Manager;