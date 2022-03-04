const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getId(managerId) {
    return this.id(managerId);
  }

  getEmail(managerEmail) {
    return this.email(managerEmail);
  }

  getOfficeNumber(managerOffice) {
    return this.officeNumber(managerOffice);
  }

  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
