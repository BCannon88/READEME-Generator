// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project"
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
    {
        type: "input",
        name: "instillation",
        message: "Please provide instillation instructions for your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the projects usage"
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide information on all parties contributions"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test on your project"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the project license"
    },
    {
        type: "input",
        name: "badges",
        message: "Please provide any attained badges"
    },
    {
        type: "input",
        name: "features",
        message: "Please provide information on the features of your project"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
