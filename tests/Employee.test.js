const Employee = require('../lib/Employee');
const employee = new Employee("morgan",'2','test@gmail.com');
describe('Employee',() =>{
    describe("Employee constructor", () =>{
        it("should get a name, id, email and a role of Employee",()=>{
            expect(employee.name).toEqual('morgan');
            expect(employee.id).toEqual('2');
            expect(employee.email).toEqual('test@gmail.com');
        });
        it("should be able to get the employee name from the getName() method",() =>{
            expect(employee.getName()).toEqual('morgan');

        });
        it("should be able to get the employee id from the getId() method",() =>{
            expect(employee.getId()).toEqual('2');

        });
        it("should be able to get the employee email from the getEmail() method",() =>{
            expect(employee.getEmail()).toEqual('test@gmail.com');

        });
        it("should be able to get the employee role from the getRole() method",() =>{
            expect(employee.getRole()).toEqual('Employee');

        });
        
    });
});