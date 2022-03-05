const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }
  // Should I not repeat this code?
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;
