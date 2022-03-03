const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getName(internName) {
       return this.name(internName);
    }
    
    getId(internId) {
        return this.id(internId);
    }

    getEmail(internEmail) {
        return this.email(internEmail);
    }

    getSchool(internSchool) {
        return this.school(internSchool);
    }

    getRole() {
        return `Intern`;
    }

}

module.exports = Intern;