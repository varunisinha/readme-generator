// function to generate markdown for README
const generateMarkdown = (data) => {

    //License badge handling
    switch (data.license) {
        case 'Apache 2.0':
            licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case 'BSD 2-Clause':
            licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
            break;
        case 'BSD 3-Clause':
            licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
            break;
        case 'GNU AGPLv3.0':
            licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
            break;
        case 'GNU GPLv2.0':
            licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            break;
        case 'GNU GPLv3.0':
            licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
        case 'MIT':
            licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case 'Mozilla Public 2.0':
            licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            break;
        default:
            break;
    }

    //Generate table of contents
    let tOC = `\n## Table of Contents\n`
    if (data.install) { tOC += `* [Installation](#installation)\n`; }
    if (data.usage) { tOC += `* [Usage](#usage)\n`; }
    if (data.contrib) { tOC += `* [Contributing](#contributing)\n`; }
    if (data.test) { tOC += `* [Tests](#tests)\n`; }
    tOC += `* [License](#license)\n`;
    if (data.credits) { tOC += `* [Credits](#credits)\n`; }
    tOC += `* [Questions](#questions)\n`;

    //Get date for the license copyright
    let year = new Date();

    /*** README.md Generation ***/
    //--------------------------//

    //Add the README title
    let readmeTemplate = `# ${data.title}\n`;

    //Add license badge and hard line
    readmeTemplate += `\n${licenseBadge}\n\n---\n`;

    //Add the description heading and description
    readmeTemplate += `\n## Description\n${data.description}\n`;

    //Add table of contents per the users input
    readmeTemplate += tOC;

    //Add installation heading and notes per users input
    if (data.install) {
        readmeTemplate += `\n## Installation\n${data.installNotes}\n`;
    }

    //Add usage heading and notes per users input
    if (data.usage) {
        readmeTemplate += `\n## Usage\n${data.usageInfo}\n`;
    }

    //Add contributing heading and contribution guidelines per users input
    if (data.contrib) {
        readmeTemplate += `\n## Contributing\n${data.contribNotes}\n`;
    }

    //Add usage heading and notes per users input
    if (data.test) {
        readmeTemplate += `\n## Tests\n${data.testNotes}\n`;
    }

    //Add a license section
    readmeTemplate += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n`;



    //Add questions section
    readmeTemplate += `\n## Questions\n*For any additional information find me at* \n\nGitHub: [@${data.github}](https://github.com/${data.github}/)\n\nEmail: [${data.email}](mailto:${data.email})\n`;


    return readmeTemplate;

}//End of generateMarkDown

module.exports = generateMarkdown;