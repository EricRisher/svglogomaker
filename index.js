const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters",
    max: 3,
  },
  {
    type: "input",
    name: "text-color",
    message: "Enter your text color",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "shape-color",
    message: "Enter your shape color",
  },
];

// Create an SVG class
class SVG {
  constructor() {
    this.textElement = ""; // Stores the text element string
    this.shapeElement = ""; // Stores the shape element string
  }

  // Render the SVG string
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeElement}
      ${this.textElement}
    </svg>`;
  }

  // Set the text element
  setText(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  // Set the shape element based on user choice
  setShape(shape, userShapeColor) {
    this.shapeElement = shape.render(userShapeColor); // Use the shape's own render method
  }
}

// Function to write to a file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been created!");
  });
}

// Start the application asynchronously
async function start() {
  let svgString = ""; // To store the final SVG string
  const svgFile = "logo.svg"; // Output file name

  // Prompt the user for input using Inquirer
  const answers = await inquirer.prompt(questions);

  // Extract user input for text, text color, shape, and shape color
  let userText = answers.text;
  let userTextColor = answers["text-color"];
  let userShape = answers.shape;
  let userShapeColor = answers["shape-color"];

  // Create a new SVG object
  const newSvg = new SVG();

  // Set the text element with user input
  newSvg.setText(userText, userTextColor);

  // Choose shape based on user input
  switch (userShape) {
    case "Square":
      newSvg.setShape(new Square(), userShapeColor);
      break;
    case "Circle":
      newSvg.setShape(new Circle(), userShapeColor);
      break;
    case "Triangle":
      newSvg.setShape(new Triangle(), userShapeColor);
      break;
    default:
      console.log("Invalid shape");
  }

  // Generate the final SVG string
  svgString = newSvg.render();

  // Write the SVG string to a file
  writeFile(svgFile, svgString);
}

start();