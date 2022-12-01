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
            {name:'MIT', value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) '},
            {name:'ISC', value:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) '},
            {name:'GNU', value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) '},
            {name:'Boost', value:'[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) '}, 
            {name:'Mozilla', value:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) '}, 
            {name:'None', value:''}, 
            
        ]
    },
    {
        type: "checkbox",
        message: "What did you use to create this project?",
        name: "language",
        choices: [
            {name:'Python', value:'![Python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg) '},
            {name:'Markdown', value:'![Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg) '},
            {name:'Javascript', value:'![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg) '},
            {name:'HTML5', value:'![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) '},
            {name:'Node.js', value:'![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) '},
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
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "Test information",
        name: "test",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "Please provide an email address.",
        name: "email",
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
