'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/generateMarkdown.js');

//Welcome message
const welcome = [
    {
        type: 'confirm',
        // prefix: '\b',
        name: 'welcome',
        message: `This is my README.md generator!!! To begin hit 'y' or enter.`,

    },
];

const questions = ([
    {
        type: 'input',
        name: 'title',
        message: `Project Title: `,
    },
    {
        type: 'input',
        name: 'name',
        message: 'Name: ',
    },
    {
        type: 'input',
        name: 'github',
        message: `GitHub User Name: `,

    },
    {
        type: 'input',
        name: 'email',
        message: `Email Address: `,
        validate: function (value) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let result = re.test(value);
            if (result) {
                return true;
            }
            return 'Please enter a valid email address!!!';
        },
    },
    {
        type: 'input',
        name: 'description',
        message: `Project decription: `,

    },
    {
        type: 'confirm',
        name: 'install',
        message: `Do you want to add any installation notes?`,

    },
    {
        type: 'input',
        name: 'installNotes',
        message: `Please add your installation notes`,
        when: function (answers) {
            return answers.install;
        }
    },
    {
        type: 'confirm',
        name: 'usage',
        message: `Do you want to provide the user usage information?`,
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: `Please add your usage info`,
        when: function (answers) {
            return answers.usage;
        }
    },
    {
        type: 'confirm',
        name: 'contrib',
        message: `Do you want to add any notes on contributing to the repo?`,
    },
    {
        type: 'input',
        name: 'contribNotes',
        message: `Please add your what you want the user to know about contributing to the repo`,
        when: function (answers) {
            return answers.contrib;
        }
    },
    {
        type: 'confirm',
        name: 'test',
        message: `Do you want to add instructions for running tests?`,
    },
    {
        type: 'input',
        name: 'testNotes',
        message: `Please add your instructions for running tests`,
        when: function (answers) {
            return answers.test;
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which open source license would you like to use? ',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },
]);

const createFile = function (fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Readme generated in "output" folder')
    );
}
async function init() {
    try {
        await inquirer.prompt(welcome);
        const data = await inquirer.prompt(questions);
        createFile('./output/README.md', generateMarkdown(data));
    }
    catch (err) {
        console.log(err);
    }
}
init();
