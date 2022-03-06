const inquirer = require('inquirer');
const generatePage = require('../src/page-template.js');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { prompt } = require('inquirer');
const staffMembers = [];
//const writeFile = require('./dist/index.html');

class TeamProfile {
  constructor() {}

  getManager() {
    console.log(`
    ========================================
            Please Build Your Team:
    ========================================
    `);
    // start of Manager questions
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: `What is the team manager's name?`,
          validate: (managerName) => {
            if (managerName) {
              return true;
            } else {
              console.log(`Please enter the team manager's name.`);
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'managerId',
          message: `What is the team manager's ID?`,
          validate: (managerId) => {
            if (managerId) {
              return true;
            } else {
              console.log(`Please enter the team manager's ID.`);
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: `What is the team manager's email?`,
          validate: (managerEmail) => {
            if (managerEmail) {
              return true;
            } else {
              console.log('You need to enter an email address!');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'managerOffice',
          message: `What is the team manager's office number?`,
          validate: (managerOffice) => {
            if (managerOffice) {
              return true;
            } else {
              console.log(`You need to enter your manager's office number!`);
              return false;
            }
          },
        },
      ])
      .then((managerData) => {
        let manager = new Manager(
          managerData.managerName,
          managerData.managerId,
          managerData.managerEmail,
          managerData.managerOffice
        );
        staffMembers.push(manager);
        console.log(manager.getName());
        console.log(manager.getName());
        console.log(manager.getId());
        console.log(manager.getEmail());
        console.log(manager.getOfficeNumber());
        this.chooseMember();
      });
  }

  chooseMember() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employeeType',
          message: 'What type of employee would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            'I do not want to add any more team members.',
          ],
        },
      ])
      .then((employeeType) => {
        if (employeeType === 'Engineer') {
          return this.getEngineer();
        } else if (employeeType === 'Intern') {
          prompt.getIntern();
        } else if (
          employeeType === 'I do not want to add any more team members.'
        ) {
          fs.writeFile.generatePage(staffMembers);
        }
      });
  }

  getEngineer() {
    inquirer
      .prompt([
        // start of engineer questions
        {
          type: 'input',
          name: 'engineerName',
          message: `What is your engineer's name?`,
        },
        {
          type: 'input',
          name: 'engineerId',
          message: `What is your engineer's ID?`,
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: `What is your engineer's email?`,
        },
        {
          type: 'input',
          name: 'github',
          message: `What is your engineer's GitHub username?`,
        },
      ])
      .then((engineerData) => {
        let engineer = new Engineer(
          engineerData.engineerName,
          engineerData.engineerId,
          engineerData.engineerEmail,
          engineerData.github
        );
        teamBuilt.push(engineer);
        console.log(engineer.getName());
        console.log(engineer.getId());
        console.log(engineer.getEmail());
        console.log(engineer.getGithub());
        this.chooseMember();
      });
  }

  getIntern() {
    inquirer
      .prompt([
        // start of intern questions
        {
          type: 'input',
          name: 'internName',
          message: `What is your intern's name?`,
        },
        {
          type: 'input',
          name: 'internId',
          message: `What is your intern's ID?`,
        },
        {
          type: 'input',
          name: 'internEmail',
          message: `What is your intern's email?`,
        },
        {
          type: 'input',
          name: 'internSchool',
          message: `What is your intern's school?`,
        },
      ])
      .then((internData) => {
        let intern = new Intern(
          internData.internName,
          internData.internId,
          internData.internEmail,
          internData.internSchool
        );
        staffMembers.push(intern);
        console.log(intern.getName());
        console.log(intern.getId());
        console.log(intern.getEmail());
        console.log(intern.getSchool());
        this.chooseMember();
      });
  }
}

module.exports = TeamProfile;
