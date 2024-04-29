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
  let licenseLink = "";
  if (license === 'Apache License 2.0'){
    licenseLink = "http://www.apache.org/licenses/LICENSE-2.0";
  }else if (license === 'ISC License') {
    licenseLink = "https://opensource.org/license/isc-license-txt";

  }else if (license === 'MIT License') {
    licenseLink = "https://opensource.org/license/MIT";

  }else if (license === 'GNU GPLv3') {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";

  }else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
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
  
  If you have additional questions, you can reach me at ${email}.
`;
}

module.exports = generateMarkdown;
