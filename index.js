// TODO: Include packages needed for this application
const inquirer = required('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your application."
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
        message: "What are the contribution guidlines for your application?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions for your application?"
    },
    {
        type: "list",
        name: "license",
        message: "What type of license do you have?",
        choices: ["Apache License 2.0", "ISC License", "MIT License", "GNU GPLv3"]
    }
])
.then((data) => {
    return data;
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    const fileData = markdown.generateMarkdown(data);
    writeToFile("README.md", fileData);

}

// Function call to initialize app
init();
