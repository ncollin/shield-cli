/**
 * Npm modules
 */
const inquirer = require('inquirer');

/**
 * Action related to the init command
 * @public
 */
let action = () => {
    
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Hi! What should we name this new project?'
            // Should handle if a folder with the same name already exist
            // Should make sure that the string is never empty
            // Should convert the name in xxx-xxx format
        },
        {
            type: 'list',
            name: 'components',
            message: 'On what technology do you want to build your web components?',
            choices: [
                'Native',
                'Polymer'
            ],
            default: 0
        },
        {
            type: 'checkbox',
            name: 'sw',
            message: 'What features do you need in your progressif web app?',
            choices: [
                {
                   name: 'Push notification',
                   value: 'push-notification',
                   checked: true
                },
                {
                   name: 'Cached shell',
                   value: 'cached-shell',
                   checked: true
                },
                {
                   name: 'Offline mode',
                   value: 'offline-mode',
                   checked: true
                }
            ]
            // Should have mandatory based feature considered good standard
        },
        {
            type: 'confirm',
            name: 'api',
            message: 'Do you need your own REST api?'
            // Could be more customizable
        },
        {
            type: 'confirm',
            name: 'confirmation',
            message: function(answers){
                console.log(' ');
                console.log('---------------------');
                console.log('Confirmation');
                console.log('---------------------');
                console.log(answers);
                console.log(' ');
                return 'Is everything in order?';
            }
        }
        ]).then(function (answers) {
            console.log('1.1 CLONE styleguide boilerplate from GIT: Navite || Polymer');
            console.log('---');
            console.log('2.1 FORK pwa boilerplate from GIT: Sw options');
            console.log('2.2 Set templates variables');
            console.log('2.3 Push project pwa to github: projectName-pwa');
            console.log('---');
            console.log('3.1 FORK api boilerplate from GIT');
            console.log('3.2 Set templates variables');
            console.log('3.3 Push project api to github: projectName-api');
            console.log('---');
            console.log('4.1 Create local hostname');
            console.log('---');
            console.log('5.0 Expose cli help');
        });
}

var create = {
    action: action
}

module.exports = create;