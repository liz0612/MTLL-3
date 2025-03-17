const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees } = require('./src/queries');

const startApp = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Exit'
            ]
        }
    ]).then((answer) => {
        switch (answer.action) {
            case 'View all departments':
                viewDepartments().then(startApp);
                break;
            case 'View all roles':
                viewRoles().then(startApp);
                break;
            case 'View all employees':
                viewEmployees().then(startApp);
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit();
        }
    });
};

startApp();