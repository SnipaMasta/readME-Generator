// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions =

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project you are creating the readME for?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is the description of your project?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Enter any installtion instructions here. If there are none, you can enter N/A.',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'What is the purpose of your project? How would you like the user to interact with it?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Would you like others to contribute to the project? If so, how?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'If there are tests for your project, you can detail here how to use them. If not, N/A is fine.',
                name: 'test',
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
            {
                type: 'list',
                message: 'Select a license:',
                name: 'license',
                choices: [
                    'Apache License 2.0',
                    'MIT',
                    'Eclipse License 2.0',
                    'Mozilla Public License 2.0',
                    'None'
                ]
            },
        ]);


const generateReadMe = ({ title, description, installation, usage, license, contribution, test, github, email }) =>
    `# ${title}

    ## Description
    
   ${description}
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    
    ## License

    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Features
    
    If your project has a lot of features, list them here.
    
    ## How to Contribute

    ${contribution}

    ## Questions

    ${github}
    ${email}
    
    ## Tests
    
    ${test}`;

// TODO: Create a function to write README file
fs.writeFile('readME.md', data, (err) =>
    err ? console.log(err) : console.log('Successfully generated your readME!')
);



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
