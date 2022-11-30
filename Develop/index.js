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
        type: "list",
        message: "what license did you use for this project?",
        name : "license",
        choices : [
            {name:'MIT' ,value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
            {name:'GNU',value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
            {name:'Boost', value:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"}, 
            {name:'ISC' ,value:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
        ]
    },
    {
        type: "checkbox",
        message: "What did you use to create this project?",
        name: "language",
        choices: [
            {name:'Python' , value:'[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)'},
            {name:'Markdown', value:'[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)'},
            {name:'Javascript', value:'[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)'},
        ]
    },
    {
        type: "input",
        message: "What is your project about?",
        name: "description",
    },
    {
        type: "input",
        message: "Are there any installation needed for this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage information",
        name: "Usage",
    },
    {
        type: "input",
        message: "Were there any contributors for this project?",
        name: "Contributors",
    },
    {
        type: "input",
        message: "Test information",
        name: "Test",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub",
    },

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
