const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./src/html');

//empty array for all of the team members
const staffMembers = [];

const managerQuestions = [
    {
        type:'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type:'input',
        name:'Id',
        message: "What is your employee ID?"
    },
    {
        type:'input',
        name:'email',
        message: "What is your employee email?"
    },
    {
        type:'input',
        name:'officeNumber',
        message: "What is your office Number?"
    }]

const getManagerInfo = () => {
    inquirer.prompt(managerQuestions).then((response)=> {
        console.log(response);
        const newManager = new Manager(response.name, response.Id, response.email, response.officeNumber);
        staffMembers.push(newManager);
        console.log(staffMembers);
        addTeamMember();
    })
};


const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeOption',
            message:'Please select who you would like to add next',
            choices:['Engineer','Intern','None:I am done']
        }])
        .then(employeeChoice =>{
            switch(employeeChoice.employeeOption){
                case'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    buildHTMLTeam();
                    break;
            }
        })
}

getManagerInfo();
