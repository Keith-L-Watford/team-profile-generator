const Employee = require('./employee')

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email)
        this.special = github;
    }
    
    getGithub() {
        return this.special
    }
    getRole() {
        return "Engineer"
    }
}






module.exports = Engineer;