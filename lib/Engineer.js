const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
       super(name, id, email);

        this.github = github;
    }

    // Should I not repeat this code?
    getName(engineerName) {
        return this.name(engineerName);
    }
    
    getId(engineerId) {
        return this.id(engineerId);
    }

    getEmail(engineerEmail) {
        return this.email(engineerEmail);
    }

    getGithub(github) {
        return this.github(github);
    }

    getRole() {
        return `Engineer`;
    }

}

module.exports = Engineer;