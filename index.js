// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

// Questions that will be prompted to the user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your application:"
    },
    {
        type: "input",
        name: "installation",
        message: "How can your application be installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "How can your application be used?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines for your application?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions for your application?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "list",
        name: "license",
        message: "What type of license do you have?",
        choices: ["Apache License 2.0", "ISC License", "MIT License", "GNU GPLv3"]
    }
];

// Data fron the users input will be used to invoke the init function
inquirer.prompt(questions)
.then((data) => {
    init(data);
})

// TODO: Create a function to write README file

// This we create the README file after taking in the input of a file and data
function writeToFile(fileName, data) {

   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app

// The generateMarkdown function gets invoked with the data of the user's input and the README is generated
function init(data) {
    const file = markdown.generateMarkdown(data);
    writeToFile("README.md", file);
}


