const { Circle , Square , Triangle } = require('./lib/shapes')
const inquirer = require('inquirer');
const fs = require('fs');

function start() {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Type in three letters',
      name: 'text',
    },
    {
        type: 'input',
        message: 'Type in a text color',
        name: 'textColor',
      },
      {
        type: 'input',
        message: 'Type in a shape color',
        name: 'shapeColor',
      },
    {
        type: 'list',
        message: 'Choose a shape',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
      },
  ])
  .then((response) => {
    console.log(response)
    let shape;
    if (response.shape === 'circle') {
        shape = new Circle(response.text, response.textColor, response.shapeColor)
    } else if (response.shape === 'triangle') {
        shape = new Triangle(response.text, response.textColor, response.shapeColor)
    } else if (response.shape === 'square') {
        shape = new Square(response.text, response.textColor, response.shapeColor)
    }
   
    console.log(shape)

    const logo = shape.render()
    console.log(logo)

    // createLogo(response);

});
}

start();

// fs.writeFile('logo.svg', `${process.argv[2]}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );