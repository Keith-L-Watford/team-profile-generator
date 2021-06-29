const inquirer = require('inquirer');
const fs = require('fs')
const chalk = require('chalk');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require('./lib/employee');

// const firstQuestions = [
//    {
//       type: 'input',
//       name: 'name',
//       message: 'Please enter your name.',
//    },
//    {
//       type: 'numbers',
//       name: 'id',
//       message: 'Please enter your office number.',
//    },
//    {
//       type: 'input',
//       name: 'email',
//       message: 'Please enter your email.',
//    },
//    {
//       type: 'list',
//       name: 'position',
//       message: 'What is your position?',
//       choices: ["Manager", 'Engineer', 'Intern'],
//       default: 'Engineer',
//    },
// ]

let theTeam = []

// function employee(name, id, email) {
//    this.name = name;
//    this.id = id;
//    this.email = email;
//  }

let init = () => {
   // put inquierer in here
   inquirer.prompt([
      // team manager’s name, employee ID, email address, and office number

      {
         type: 'input',
         name: 'name',
         message: 'Please enter your name.',
      },
      {
         type: 'numbers',
         name: 'id',
         message: 'Please enter your ID number.',
      },
      {
         type: 'input',
         name: 'email',
         message: 'Please enter your email.',
      },
      {
         type: 'input',
         name: 'special',
         message: 'Please enter your office number',
      }
      //    {
      //    type: 'list',
      //    name: 'position',
      //    message: 'What is your position?',
      //    choices: ["Manager", 'Engineer', 'Intern'],
      //    default: 'Engineer',
      // }
   ]).then((managerData) => {
      const managerInfo = new Manager(managerData.name, managerData.id, managerData.email, managerData.special)
      // console.log(managerInfo);
      // console.log(theTeam);
      theTeam.push(managerInfo)
      // console.log(theTeam);

      createTeam()

      function createTeam() {
         inquirer.prompt([{
            type: 'list',
            name: 'teamRole',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', '[Exit]'],
            default: 'Engineer',
         }]).then((teamRole) => {
            // this is what messed me up, i needed the parameter and the name "teamRole" to bring engineer or intern through.
            // AHHHHHH YES! :)
            if (teamRole.teamRole == 'Engineer') {
               // BLAH BLAH ENGINEER QUESTIONS
               addEngineer()

               function addEngineer() {
                  inquirer.prompt([{
                        type: 'input',
                        name: 'name',
                        message: "Please enter the Engineer's name.",
                     },
                     {
                        type: 'numbers',
                        name: 'id',
                        message: "Please enter the Engineer's number.",
                     },
                     {
                        type: 'input',
                        name: 'email',
                        message: "Please enter the Engineer's email.",
                     },
                     {
                        type: 'input',
                        name: 'special',
                        message: "Please enter the Engineer's github username.",
                     }
                  ]).then((engineerData) => {
                     const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.special)
                     theTeam.push(engineer)
                     // console.log(engineer);
                     console.log(theTeam)

                     createTeam()
                  })
               }
            } else if (teamRole.teamRole === 'Intern') {
               // BLAH BLAH INTERN
               addIntern()

               function addIntern() {
                  inquirer.prompt([{
                        type: 'input',
                        name: 'name',
                        message: "Please enter the Intern's name.",
                     },
                     {
                        type: 'numbers',
                        name: 'id',
                        message: "Please enter the Interns's number.",
                     },
                     {
                        type: 'input',
                        name: 'email',
                        message: "Please enter the Interns's email.",
                     },
                     {
                        type: 'input',
                        name: 'special',
                        message: "Please enter the Intern's school.",
                     }
                  ]).then((internData) => {
                     const intern = new Intern(internData.name, internData.id, internData.email, internData.special)
                     theTeam.push(intern)
                     // console.log(intern);
                     console.log(theTeam)

                     createTeam()
                  })
               }
            } else {
               // EXIT THIS HELL LOOP & Write the HTML


               function renderTeam(theTeam) {
                  const theFinalTeam = theTeam.map((employee) =>
                  `
                  <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        ${employee.role}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${employee.name}</li>
                        <li class="list-group-item">${employee.id}</li>
                        <li class="list-group-item">${employee.email}</li>
                        <li class="list-group-item">${employee.special}</li>
                    </ul>
                </div>

                  `);
                  return theFinalTeam
               }



               const htmlTemplate = ` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>My Team</title>
</head>

<body>
<h1 class="text-center">My Team!</h1>
    <div class="container">
      <div>${renderTeam(theTeam)}</div>
   </div>
</body>
</html>`
               fs.writeFile('./dist/index.html', htmlTemplate, (err) =>
                  err ? console.error(err) : console.log('Success!')
               );
            }
         })
      }
   })
}








// const customHTML;
//     fs.writeFile('', customHTML, (err) =>
//     err ? console.error(err) : console.log('Success!')
// );








// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// create a empty array of team members
// make sure that its has its .legnth === 5






init()




// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// {
//    type: 'list',
//    name: 'position',
//    message: 'What is your position?',
//    choices: ["Manager", 'Engineer', 'Intern'],
//    default: 'Engineer',
// }