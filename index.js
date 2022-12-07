// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');


// Template for the ReadMe file
const generateReadME = ({ title, description, installation, usage, guidelines, instructions, license, username, linkedin, email }) => `# ${title}

## Description

${description}

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Guidelines

${guidelines}

## Instrcutions

${instructions}

## License

${license}

# Contact:
* GitHub: ${username}
* LinkedIn: ${linkedin}
* E-mail: ${email}`;

// TODO: Create an array of questions for user input
const questions = [
  {
      type: 'confirm',
      message: 'Are you ready to begin your professional readME?',
      name: 'agreement',
      validate: (value)=> { if(value == true){return true}}
    },
    {
      type: 'input',
      message: "What's project title?",
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a description of the project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you install the app?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contribution Guidelines?',
      name: 'guidelines',
    },
    {
      type: 'input',
      message: 'Instructions to be follow?',
      name: 'instructions',
    },
    {
      type: 'list',
      message: 'What license did you used?',
      name: 'license',
      choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A'],
    },
    {
      type: 'input',
      message: 'What is your Github URL?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const readMEContent = generateReadME(answers);

    fs.writeFile(`${answers.title.toLowerCase().split(' ').join('')}.md`, readMEContent, (err) => 
    err ? console.log(err) : console.log('Successfully create READ.md file!')
    );
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
