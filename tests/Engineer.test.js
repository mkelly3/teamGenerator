const Engineer = require('../lib/Engineer');
const newEngineer = new Engineer('alex','2','test@gmail.com','octocat');

describe('Engineer',() =>{
    describe("Engineer Constructor", () =>{
        it("should get a name, id, email and github ",()=>{
            expect(newEngineer.name).toEqual('alex');
            expect(newEngineer.id).toEqual('2');
            expect(newEngineer.email).toEqual('test@gmail.com');
            expect(newEngineer.github).toEqual('octocat')
        });
        it("should be able to get the Engineers GitHub from the getGitHub() method",() =>{
            expect(newEngineer.getGitHub()).toEqual('octocat');
        });
        it("should have a role of Engineer",() =>{
            const newRole = "Engineer"
            expect(newEngineer.getRole()).toEqual(newRole)
        })
    });

});


