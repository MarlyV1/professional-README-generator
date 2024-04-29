// TODO: Include packages needed for this application
const inquirer = required('inquirer');
const fs = require('fs');
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
    }
])
.then((data) => {

})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
`# ${data.title}


## Description
${data.description}


## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing) 
- [Tests](#tests)
- [Questions](#questions)


## Installation
${data.installation}
    

## Usage
${data.usage}   
    

## License
${data.license}

    ---
    
    🏆 

## Contributing
${data.contributing}
    

## Tests
${data.tests}


## Questions
GitHub Profile: <a href = https://github.com/${username}>${username}</a>

If you have additional questions, you can reach me at ${email}.`;

    
    fs.writeFile('README.md', fileName, (err) => {
        err ? console.error(err) : console.log ("Successfully added the README file")
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
