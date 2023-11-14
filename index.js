// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require ("fs")
// TODO: Create an array of questions for user input
//  var temp= generateMarkdown("Hello")   



// TODO: Create a function to write README file

// TODO: Create a function to initialize app

const init = () => {
    inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'pets',
    message: 'Do you have pets?',
  },
  {
    type: 'input',
    name: 'profession',
    message: 'What is your profession?',
  },
  {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
  },
  ])
.then ( answers =>{
    console.log(answers)
    var temp= generateMarkdown(answers)
    console.log(temp)
    fs.writeFile("./dist/README.md", temp,  (err) => err ? console.log(err) : console.log('Successfully created README.md!'));
})

}

// Function call to initialize app
init();
