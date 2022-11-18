// added variable for inquirer installed via node
const inquirer = require('inquirer');
// added variable for fs writing from node
const fs = require('fs');

// created arrow function to generate HTML; added ${} to set data entered by user inside HTML fields
const generateHTML = (data) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README Generator</title>
</head>
<body>
    <h1>${data.title}</h1>
    <h2>Table of Contents</h2>
    <p>Description</p>
    <p>Installation</p>
    <p>Usage</p>
    <p>Contributors</p>
    <p>Instructions</p>
    <p>License</p>
    <p>Github</p>
    <p>Email</p>


    <p>Description: ${data.description}</p>
    <p>Installation Instructions: ${data.installation}</p>
    <p>Usage: ${data.usage}</p>
    <p>Contributors: ${data.contributors}</p>
    <p>Instructions for Usage: ${data.instructions}</p>
    <p>License: ${data.license}</p>
    <p>GitHub Link: ${data.github}</p>
    <p>Email: ${data.email}</p>
 <script src="./potential-enigma/index.js"></script>
</body>
</html>`

// prompts created for user to follow to create file
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please name your title.',
    },
    {
      type: 'input',
      message: 'Please describe your project.',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Please give any installation instructions.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please describe usage information.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please list contributors here.',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'Please add test instructions here.',
        name: 'instructions',
      },
    {
      type: 'list',
      message: 'What is your preferred license agreement?',
      name: 'license',
      choices: ['MIT', 'Eclipse Public', 'Apache License'],
    },
    {
        type: 'input',
        message: 'Please add your GitHub link here.',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please add an email here.',
        name: 'email',
      },
  ])
//   then function created to generate answers and write to HTML using fs. writefile
  .then((data) => {
    const html = generateHTML(data)

    fs.writeFile('index.html', html, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
