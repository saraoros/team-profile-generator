// const inquirer = require('inquirer');
// const fs = require('fs');
// const generateEmployees = require('../src/page-template.js');
// const Manager = require('./Manager');
// //const { writeFile, copyFile } = require('./dist/index.html');

// class TeamProfile {
//   constructor() {}

//   getManager() {
//     console.log(`
//     ========================================
//             Please Build Your Team:
//     ========================================
//     `);

//     inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'managerName',
//           message: `What is the team manager's name?`,
//           validate: (managerName) => {
//             if (managerName) {
//               return true;
//             } else {
//               console.log(`Please enter the team manager's name.`);
//               return false;
//             }
//           },
//         },
//         {
//           type: 'input',
//           name: 'managerId',
//           message: `What is the team manager's ID?`,
//           validate: (managerId) => {
//             if (managerId) {
//               return true;
//             } else {
//               console.log(`Please enter the team manager's ID.`);
//               return false;
//             }
//           },
//         },
//         {
//           type: 'input',
//           name: 'managerEmail',
//           message: `What is the team manager's email?`,
//           validate: (managerEmail) => {
//             if (managerEmail) {
//               return true;
//             } else {
//               console.log('You need to enter an email address!');
//               return false;
//             }
//          },
//         },
//         {
//           type: 'input',
//           name: 'managerOffice',
//           message: `What is the team manager's office number?`,
//           validate: (managerOffice) => {
//             if (managerOffice) {
//               return true;
//             } else {
//               console.log('You need to enter an email address!');
//               return false;
//             }
//           },
//         },
//       ])
//       .then((managerData) => {
//         console.log(managerData);
//         let manager = new Manager(
//           managerData.managerName,
//           managerData.managerName,
//           managerData.managerEmail,
//           managerData.managerOffice
//         );
//         console.log(manager.getName());
//         this.chooseMember();
//       });
//   }




//   chooseMember() {
//     inquirer.prompt([
//       {
//         type: 'list',
//         name: 'employeeType',
//         message: 'What type of employee would you like to add?',
//         choices: [
//           'Engineer',
//           'Intern',
//           'I do not want/ to add any more team members.',
//         ],
//       },
//     ]);

//   }

//   getEngineer() {
//     inquirer.prompt([
//       // start of engineer questions
//       {
//         type: 'input',
//         name: 'engineerName',
//         message: `What is your engineer's name?`,
//       },
//       {
//         type: 'input',
//         name: 'engineerId',
//         message: `What is your engineer's ID?`,
//       },
//       {
//         type: 'input',
//         name: 'engineerEmail',
//         message: `What is your engineer's email?`,
//       },
//       {
//         type: 'input',
//         name: 'github',
//         message: `What is your engineer's GitHub username?`,
//       },

//       {
//         type: 'list',
//         name: 'employeeType',
//         message: 'What type of employee would you like to add?',
//         choices: [
//           'Engineer',
//           'Intern',
//           'I do not want to add any more team members.',
//         ],
//         // should I add an if/else statement here? if they choose,
//       },
//     ])
//     .then((engineerData) => {
//       console.log(engineerData);
//       let engineer = new Engineer(
//         engineerData.engineerName,
//         engineerData.engineerName,
//         engineerData.engineerEmail,
//         engineerData.engineerOffice
//       );
//       console.log(engineer.getName());
//       this.chooseMember();
//     });
//   }

//   getIntern() {
//     inquirer.prompt([
//       // start of intern questions
//       {
//         type: 'input',
//         name: 'internName',
//         message: `What is your intern's name?`,
//       },
//       {
//         type: 'input',
//         name: 'internId',
//         message: `What is your intern's ID?`,
//       },
//       {
//         type: 'input',
//         name: 'internEmail',
//         message: `What is your intern's email?`,
//       },
//       {
//         type: 'input',
//         name: 'internSchool',
//         message: `What is your intern's school?`,
//       },
//     ])
//     .then((internData) => {
//       console.log(internData);
//       let intern = new Intern(
//         internData.internName,
//         internData.internName,
//         internData.internEmail,
//         internData.internOffice
//       );
//       console.log(intern.getName());
//       console.log(intern.getId());
//       console.log(intern.getEmail());
//       console.log(intern.getSchool());
//       this.chooseMember();
//     });
//   }
// }

module.exports = TeamProfile;
