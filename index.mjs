import inquirer from "inquirer";
import fs from fs/promises;

let {title, description, TOC, installation, usage, licenses} = await inquirer    
    .prompt([{
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
        name: 'TOC',
        message: `please input the items in your table of contents, seperated by commas`
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
    
])

let readmeText = `

# title
${title}

## Project Description
${description}

### license
${generateLicense(licenses)}
`

function generateLicense(choice){
    if(choice === "MIT License"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if(choice === "Apache License"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if(choice === "GNU License"){
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
}
