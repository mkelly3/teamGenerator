# Team Generator

## Description
This application has the user enter information into the command line to generate an HTML webpage. The User first enters information about themsleves and then they are able to enter information about others. The roles being asked for this team as manager, intern and engineer all include a name, employee id and email and an additional question that is specific for each position. Once, the user clicks that they are done entering team members then the webpage is dynamiccaly generated.

## Table of Contents
- [Description](#description)
- [Video](#video-link)
- [Code Snippet](#code-snippet)
- [Technologies Used](#technologies-used)
- [Installation](#instalation)
- [Contact Information](#contact-information)

## Video Link
[Video Link](https://drive.google.com/file/d/1Cq5U2JknX4l0hzVb6iqCfUadCCv3wmkf/view)

## Code Snippet
The code snippet below shows how each card is generated. The one displayed is for the Engineer. Therefore, the data gathered from the command line is dynamically inputted into each respective area of the
html card. 

``` const getEngineer = (engineer) =>{
        return ` 
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>
     `;
    };
```

## Technologies Used
- Node.Js
- JavaScript
- Git
- GitHub
- HTML
- Boot Strap 

## Installation
- Inquirer
- Jest

## Contact Information 
- [GitHub](https://github.com/mkelly3/)
- [Linkedin](https://www.linkedin.com/in/morgan-kelly15/)
