function makeREADME(data){
return `
# Title
${data.title}

## Project Description
${data. description}

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

### Installation
${data.installation}

### Usage
${data.usage}

### License
${generateLicense(data.licenses)}

### Contributors
${data.contributers}

### Tests
${data.tests}

### Questions
You can find my github work at github.com/${data.username}. You can direct all questions to ${data.email}.
`
}

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

module.exports = makeREADME;