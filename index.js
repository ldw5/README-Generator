// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message: 'what is the name of this project?',
    name: 'Title'
}, {
    type:'input',
    message: 'what is the project about?',
    name: 'Description'
}, {
    type:'input',
    message: 'Table of Contents',
    name: 'Table of Contents'
}, {
    type:'input',
    message: 'what does your user need to run this app?',
    name: 'Installation'
}, {
    type:'input',
    message: 'How is this app used? Give instructions',
    name: 'Usage'
}, {
    type:'input',
    message: 'What license is being used?',
    name: 'License'
}, {
    type:'input',
    message: 'who contributed to this project?',
    name: 'Contributing'
}, {
    type:'input',
    message: 'what commands are needed to test this app?',
    name: 'Tests'
}, {
    type:'input',
    message: 'Contact info for inquiries?',
    name: 'Questions'
}, {
    type:'input',
    message: 'what is your github username?',
    name: 'username'
}, {
    type:'input',
    message: 'what is your email address?',
    name: 'Email'
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('success')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();