const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./src/page-template.js');

const questions = () => {
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
            validate: managerName => {
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
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's ID.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: `What is the team manager's email?`,
            validate: managerEmail => {
              if (managerEmail) {
                return true;
              } else {
                console.log('You need to enter an email address!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'managerOffice',
            message: `What is the team manager's office number?`,
            validate: managerOffice => {
              if (managerOffice) {
                return true;
              } else {
                console.log('You need to enter an email address!');
                return false;
              }
            }
          },
    ])






}