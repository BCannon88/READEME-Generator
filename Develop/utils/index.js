// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown')

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
        type: "checkbox",
        name: "license",
        message: "Please choose the project license",
        choices: ['BSD 3-Clause', 'EPL-2.0', 'Apache License 2.0', 'MIT', 'Mozilla Public License 2.0']
    },
    {
        type: "input",
        name: "badges",
        message: "Please provide the links for any attained badges"
    },
    {
        type: "input",
        name: "features",
        message: "Please provide information on the features of your project"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide information on all contributors"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test on your project"
    },
    {
        type: "input",
        name: "questions",
        message: "please provide your GIThub username and link to your Github profile"
    }
  
];
inquirer
.prompt(questions)
.then(function(data){

      fs.writeFile("README-sample.md", generate(data), function(err) {
        if (err) throw err;
        
        console.log("New README file created with success!");
      });
    
});

function init() {

}

init();


