import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import makeREADME from "./utils/generateReadme.js";

let userInput = 
    [{
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Input a description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'please input installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'please input usage instructions'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'please choose a license',
        choices: [
            'MIT License',
            'Apache License',
            'GNU License'
        ]
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'please list your contributors'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'please add any tests you performed'
    },
    {
        type: 'input',
        name: 'username',
        message: 'please input your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'please enter your email address'
    }
]

function writeFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init(){
    inquirer.prompt(userInput)
    .then ((param) => {
    console.log("readme being generated, please wait");
    writeFile("README.md", makeREADME({...param}));
    })
}

init();