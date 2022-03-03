const inquirer = require('inquirer');
const fs = require('fs');
const generateEmployees = require('../src/page-template.js');
//const { writeFile, copyFile } = require('./dist/index.html');




const promptQuestions = () => {
  console.log(`
    ========================================
            Please Build Your Team:
    ========================================
    `)

  return inquirer
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
        }
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
            console.log('You need to enter an email address!');
            return false;
          }
        },
      },
      // end of managers questions, should this be a separate function?

      // start of employee type selection
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

      {
        type: 'list',
        name: 'employeeType',
        message: 'What type of employee would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          'I do not want to add any more team members.',
        ],
        // should I add an if/else statement here? if they choose, 


      },

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

    
};

promptQuestions()
.then(answers => console.log(answers));