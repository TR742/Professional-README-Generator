// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter a title for the project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description for the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe the installation process for the project',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please describe how to use the project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please include the contributors for the project',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please describe how to test the project',
        name: 'test'
    }];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (input) {
        console.log(input);
    })
};

// Function call to initialize app
init();