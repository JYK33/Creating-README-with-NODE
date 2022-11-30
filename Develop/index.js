// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What do you want your README file to be named?",
        name: "fileName",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your project about?",
        name: "description",
    },
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then(response => {
        const md = generateMarkdown(response)
        writeToFile(`${response.fileName}.md`, md)
    })
// Function call to initialize app
init();
