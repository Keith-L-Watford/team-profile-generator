const inquirer = require('inquirer');
const chalk = require('chalk');

const allQuestions = [
    {
        type: 'confirm',
        message: 'Are you an employee?',
        name: 'employee',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name.',
     },
     {
        type: 'numbers',
        name: 'id',
        message: 'Please enter your id number.',
     },
     {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
     },
     {
        type: 'list',
        name: 'position',
        message: 'What is your position?',
        choices: ["Manager", 'Engineer', 'Intern'],
        default: 'Engineer',
     },
]



    inquirer.prompt(allQuestions).then((answers) => {
        console.log(answers.employee);
        console.log(answers.email);
        console.log(answers.name);
        console.log(answers.id);
        console.log(answers.position);


//   console.log(JSON.stringify(answers, null, '  '));
});









// const customHTML;
//     fs.writeFile('', customHTML, (err) =>
//     err ? console.error(err) : console.log('Success!')
// );







// inquirer.prompt([{
//             type: 'confirm',
//             message: 'Are you an employee?',
//             name: 'employee',
//         },
//         // {    
//         //     type: 'list',
//         //     message: 'What is your role?',
//         //     choices:['Manager', 'Engineer', 'Employee', 'Intern'],
//         //     name: 'role',
//         //     default: '',
//         // },
//     ])








// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated