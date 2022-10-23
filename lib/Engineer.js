const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //super provides the partent constructor of name, id and email 
        super(name, id, email);

        this.role = "Engineer";
        this.github = github;
    };
    getGitHub() {
        return this.github;
    }
};

module.exports = Engineer;