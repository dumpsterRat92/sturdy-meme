// Function to render license badge
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    } else {
      return '';
    }
  }
  
  // Function to render license link
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `[${license} License](https://opensource.org/licenses/${license})`;
    } else {
      return '';
    }
  }
  
  // Function to render license section of README
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  
  This project is licensed under the ${renderLicenseLink(license)}.`;
    } else {
      return '';
    }
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ${licenseBadge}
  
## Description
  
  ${data.description}
  
## Table of Contents
  
- [Description](#description)
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
  
  ${licenseSection}
  
## Contributing
  
  ${data.contributing}
  
## Tests
  
  ${data.tests}
  
## Questions
  
  For any questions or feedback, feel free to contact me:
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}`;
  }
  
  module.exports = generateMarkdown;