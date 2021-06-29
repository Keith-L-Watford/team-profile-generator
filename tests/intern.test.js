const Intern = require("../lib/intern");


 describe('Intern', () => {
    describe('init', () => {
        it('should create new employee object if given valid arguments', () => {
            //  Arrange
            const testIntern = new Intern ("John", 213, "email@email.com", "Upenn" )
            //  Act
            //  Assert
            expect(testIntern.name).toEqual("John");
            expect(testIntern.id).toEqual(213);
            expect(testIntern.email).toEqual("email@email.com");
            expect(testIntern.special).toEqual("Upenn");
         });
        
    });
     
 });