const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateStaffHTML = require('./src/html.js');
const writeFileAsync = util.promisify(fs.writeFile);


//empty array for all of the team members
let staffMembers = [];

//using FS to write the data in a new index.html file. 
const makeMyTeam = () =>{
    fs.writeFileSync('./dist/index.html',generateStaffHTML(staffMembers), "utf-8");
}

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
                    makeMyTeam();
                    console.log("All DONE!");
                    break;
            }
        })
}



const addEngineer = () => {
    return inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: "What is the Engineers' name?"
    },
    {
        type:'input',
        name:'Id',
        message: "Enter Engineer's ID?"
    },
    {
        type:'input',
        name:'email',
        message: "Enter engineer's email?"
    },
    {
        type:'input',
        name:'gitHubUser',
        message: "Enter the engineer's gitHub username?"  
    }

    ])
    .then((engineerResponse) =>{
        const engineer = new Engineer(engineerResponse.name, engineerResponse.id,engineerResponse.email, engineerResponse.gitHubUser);
        staffMembers.push(engineer);
        console.log(staffMembers);
        addTeamMember();
    });
}


const addIntern = () => {
    return inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: "What is the Interns' name?"
    },
    {
        type:'input',
        name:'Id',
        message: "Enter Interns's ID?"
    },
    {
        type:'input',
        name:'email',
        message: "Enter Interns's email?"
    },
    {
        type:'input',
        name:'school',
        message: "Enter the Interns's school?"  
    }

    ])
    .then((internAnswer) =>{
        const intern = new Intern (internAnswer.name, internAnswer.id,internAnswer.email, internAnswer.school);
        staffMembers.push(intern);
        console.log(staffMembers);
        //calling addTeamMember so the manager can add more people 
        addTeamMember();
    });
}

getManagerInfo();