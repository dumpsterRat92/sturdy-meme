const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Packages needed for this application
// No additional packages needed for now

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    message: 'Provide a description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'How do users install your application?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL', 'Apache', 'None'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'How can others contribute to your project?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Provide instructions for testing your application:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'githubUsername',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} file created successfully!`);
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    })
    .catch((err) => {
      console.error('An error occurred:', err);
    });
}

// Function call to initialize app
init();