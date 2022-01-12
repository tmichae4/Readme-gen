
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const fs = require ('fs');

const questions = [
    {
        type: "input",
        name:"name",
        message:"name of new project?",
    },
    {
        type: "input",
        name:"statement",
        message:"Describe the project:",
    },
    {
        type: "input",
        name:"develop",
        message:"Describe the development:",
    },
    {
        type: "input",
        name:"usage",
        message:"What are you using this porject for?",
    },
    {
        type: "input",
        name:"contributing",
        message:"who contributed?",
    },
    {
        type: "input",
        name:"test",
        message:"How would you test this?",
    },
    {
        type: "list",
        name:"what licencse would you use",
        choices: [
        "Apache 2.0", "MIT" ]
    },
    {
        type: "input",
        name:"id",
        message:"Enter GitHub id:",
    },
    {
        type: "input",
        name:"email",
        message:"Enter email:",
    },
]
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) return console.log(error);
        console.log("README.md successful")
    })
    
}
function init() {
    inquirer.prompt(questions). then(answers => {
        const ReadMeData = generateMarkdown(answers)
        return ReadMeData
    })
.then (rmInfo => writeToFile('README.md', rmInfo))
}

init();