class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(this.name);
    }

    getId() {
        console.log(this.id)
    }

    getEmail() {
        console.log(this.email)
    }

    getRole(){
        if (this.role = null) {
            let role = Employee;
            
            console.log(role);
        }
    }
}

module.exports = Employee;