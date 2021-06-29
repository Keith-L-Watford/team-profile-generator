const Engineer = require("../lib/engineer");


 describe('Engineer', () => {
    describe('init', () => {
        it('should create new engineer object if given valid arguments', () => {
            //  Arrange
            const testEngineer = new Engineer ("Barbara", 287, "email@email.com", "username")
            //  Act
            //  Assert
            expect(testEngineer.name).toEqual("Barbara");
            expect(testEngineer.id).toEqual(287);
            expect(testEngineer.email).toEqual("email@email.com");
            expect(testEngineer.special).toEqual("username");
         });
        
    });
     
 });