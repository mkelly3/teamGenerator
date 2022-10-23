const Intern = require('../lib/Intern');
const newIntern = new Intern('alex','20','test@gmail.com','Purdue');

describe('Intern',() =>{
    describe("Intern Constructor", () =>{
        it("should get a name, id, email and school ",()=>{
            expect(newIntern.name).toEqual('alex');
            expect(newIntern.id).toEqual('20');
            expect(newIntern.email).toEqual('test@gmail.com');
            expect(newIntern.school).toEqual('Purdue')
        });
        it("should be able to get the interns school from the getSchool() method",() =>{
            expect(newIntern.getSchool()).toEqual('Purdue');
        });
        it("should have a role of intern",() =>{
            const newRole = "Intern"
            expect(newIntern.getRole()).toEqual(newRole)
        })
    });

});
