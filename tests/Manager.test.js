const Manager = require('../lib/Manager');
const newManager = new Manager('alex','20','test@gmail.com','200');

describe('Manager',() =>{
    describe("Intern Constructor", () =>{
        it("should get a name, id, email and officeNumber ",()=>{
            expect(newManager.name).toEqual('alex');
            expect(newManager.id).toEqual('20');
            expect(newManager.email).toEqual('test@gmail.com');
            expect(newManager.officeNumber).toEqual('200')
        });
        it("should be able to get the managers office numbrer from the getOfficeNumber() method",() =>{
            expect(newManager.getOfficeNumber()).toEqual('200');
        });
        it("should have a role of Manager",() =>{
            const newRole = "Manager"
            expect(newManager.getRole()).toEqual(newRole)
        })
    });

});
