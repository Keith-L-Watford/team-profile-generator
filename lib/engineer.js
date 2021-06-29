const Employee = require('./employee')

class Engineer extends Employee {
    constructor (name, id, email, github, role){
        super(name, id, email)
        this.special = github;
        this.role = role;
    }
    
    getGithub() {
        return this.special
    }
    getRole() {
        return "Engineer"
    }
}






module.exports = Engineer;