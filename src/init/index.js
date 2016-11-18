/**
 * Npm modules
 */
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

/**
 * Return an array existing folder in the current folder
 * @public
 * @returns {Array}
 */
let listFolders = () => {
    var relativePath = './';
    return fs.readdirSync(relativePath)
        .filter((item) => {
            return fs.statSync(path.join(relativePath, item)).isDirectory();
        })
        
    // Todo: verify if the folder return do not container a shield.json
    // Disable item? Overwrite? Add hint that it's already existing + Overwrite.
}

/**
 * Return true if the application was chosen by the user
 * @public
 * @param {Object} answers
 * @param {String} applicationName
 * @returns {Booleen}
 */
let wasApplicationChosen = (answers, applicationName) => {
    return (answers.applications.indexOf(applicationName) !== -1)
}

/**
 * Action related to the init command
 * @public
 */
let action = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'init',
            message: 'Do you want to configure project with the shield client?'
        },
        {
            type: 'checkbox',
            name: 'applications',
            message: 'What application will shield client use?',
            choices: [
                {
                    name: 'Styleguide',
                    value: 'styleguide',
                    checked: true
                },
                {
                    name: 'Progressive web app',
                    value: 'pwa',
                    checked: true
                },
                {
                    name: 'REST Api',
                    value: 'api'
                }
            ]
        },
        {
            type: 'list',
            name: 'styleguide',
            message: 'Which folder is the styleguide?',
            choices: init.listFolders,
            default: 0,
            when: (answers) => {
                return init.wasApplicationChosen(answers, 'styleguide');
            }
        },
        {
            type: 'list',
            name: 'pwa',
            message: 'Which folder is the progressive web app?',
            choices: init.listFolders,
            default: 0,
            when: (answers) => {
                return init.wasApplicationChosen(answers, 'pwa');
            }
        },
        {
            type: 'list',
            name: 'api',
            message: 'Which folder is the REST Api?',
            choices: init.listFolders,
            default: 0,
            when: (answers) => {
                return init.wasApplicationChosen(answers, 'api');
            }
        }
    ]).then(function (answers) {
        console.log('1.1 Configuration');
    });
}

var init = {
    action: action,
    listFolders: listFolders,
    wasApplicationChosen: wasApplicationChosen
}

module.exports = init;