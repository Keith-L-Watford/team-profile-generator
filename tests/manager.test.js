const Manager = require("../lib/manager");


 describe('Manager', () => {
    describe('init', () => {
        it('should create new manager object if given valid arguments', () => {
            //  Arrange
            const testManager = new Manager ("Benjamin", 543, "email@email.com", "001")
            //  Act
            //  Assert
            expect(testManager.name).toEqual("Benjamin");
            expect(testManager.id).toEqual(543);
            expect(testManager.email).toEqual("email@email.com");
            expect(testManager.special).toEqual("001");
         });        
    });     
 });