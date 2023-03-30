// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "creator",
        message: "Who is the creator of this projec?"   
    },
    {
        type: "input",
        name: "purpose",
        message: "Explain the purpose and functionality of your project?"   
    },
    {
        type: "input",
        name: "github",
        message: "Plese enter your GitHub username.?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors?"
    },
    {
        type: "input",
        name: "email", 
        message: "Please list your email?"
    },
    {
        type: "input",
        name: "license",
        message: "What license did you use?",
        choices: [
            {name:"MIT", value: "MIT"}, 
            {name:"GPL", value: "GPL"}, 
            {name:"Apache", value: "Apache"}, 
            {name:"GNU", value: "GNU"}, 
            {name:"NONE", value: "NONE"},
        ]
    }

];

// TODO: Create a function to write README    
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("README.md has been created!")
        }
    }); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Making README.md File...");
        writeToFile(path.join(__dirname, "README.md"), generateMarkdown(responses));
    })
}

// Function call to initialize app 
init();
