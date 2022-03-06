const inquirer = require('inquirer');
//const { prompt } = require('inquirer');
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const staffMembers = [];

const fs = require('fs');
const { writeFile } = require('./utils/generate-site');


class TeamProfile {
  constructor() {}

  getManager() {
    console.log(`
    ========================================
            Lets Build Your Team!
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
      .then((employee) => {
        if (employee.employeeType === 'Engineer') {
          console.log(
            `
                *******************************************
                 Answer some questions about your engineer!
                *******************************************

                `
          );
          return this.getEngineer();
        } else if (employee.employeeType === 'Intern') {
          console.log(
            `
                *******************************************
                 Answer some questions about your intern!
                *******************************************
                
                `
          );
          return this.getIntern();
        } else if (
          employee.employeeType ===
          'I do not want to add any more team members.'
        ) {
          console.log(
            `
            =====================================
             Your Team Profile has been created!
            =====================================
            `
          );
           staffDataOutput(staffMembers);
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
        staffMembers.push(engineer);
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
        this.chooseMember();
      });
  }
}

// ******
function staffDataOutput(staffMembers) {
console.log('We are inside staffDataOutput \n ',{staffMembers})

     fs.writeFile('./dist/index.html', generatePage(staffMembers), (err) => console.log(err));  
     
   }


module.exports = TeamProfile;
