// added variable for inquirer installed via node
const inquirer = require('inquirer');
// added variable for fs writing from node
const fs = require('fs');

// created arrow function to generate HTML; added ${} to set data entered by user inside HTML fields
const generateHTML = (data) =>
`
# Table of Contents

1. [ Title. ](#title) 
2. [ Description. ](#description) 
3. [ Installation Instructions. ](#installation) 
4. [ Usage. ](#usage)
5. [ Contributors. ](#contributors)
6. [ License. ](#license)
7. [ GitHub Information. ](#github)
8. [ Email. ](#email)

<a name="title"></a>
## Title
${data.title}

<a name="description"></a>
## Description
${data.description}

<a name="installation"></a>
## Installation Instructions
${data.installation}

<a name="usage"></a>
## Usage
${data.usage}

<a name="contributors"></a>
## Contributors
${data.contributers}

<a name="license"></a>
## License
${data.license}

<a name="github"></a>
## GitHub Information
${data.github}

<a name="email"></a>
## Email
${data.email}

`

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

    fs.writeFile('./output/readme.md', html, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
