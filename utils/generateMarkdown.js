// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  if (license === 'Apache License 2.0') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if (license === 'ISC License') {
      licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }else if (license === 'MIT License') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license === 'GNU GPLv3') {
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `- [License](#license)`
  }
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License\n ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  
  ${licenseBadge}
  
  ## Description
  ${data.description}
  
  
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Contributing](#contributing) 
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  ${data.installation}
      
  
  ## Usage
  ${data.usage}   
      
  
  ${licenseSection}

  
  ## Contributing
  ${data.contributing}
      
  
  ## Tests
  ${data.tests}
  
  
  ## Questions
  GitHub Profile: <a href = https://github.com/${data.username}>${data.username}</a>
  
  If you have additional questions, you can reach me at ${data.email}.
`;
}

module.exports = {
  generateMarkdown
}
