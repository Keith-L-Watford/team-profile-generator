const Employee = require("../lib/employee");


 describe('Employee', () => {
    describe('init', () => {
        it('should create new employee object if given valid arguments', () => {
            //  Arrange
            const testEmployee = new Employee ("Kevin", 999, "email@email.com")
            //  Act
            //  Assert
            expect(testEmployee.name).toEqual("Kevin");
            expect(testEmployee.id).toEqual(999);
            expect(testEmployee.email).toEqual("email@email.com");
         });
        
    });
     
 });