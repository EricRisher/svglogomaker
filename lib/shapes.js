// Define a base class called Shape
class Shape {
  constructor() {
    this.color = ""; // Initialize the color property to an empty string
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Define a class called Square that extends the Shape class
class Square extends Shape {
  // Method to render the square shape with a specified color
  render(shapeColor) {
    return `<rect x="50" width="200" height="200" fill="${shapeColor}" />`;
  }
}

// Define a class called Circle that extends the Shape class
class Circle extends Shape {
  // Method to render the circle shape with a specified color
  render(shapeColor) {
    return `<circle cx="150" cy="100" r="80"  fill="${shapeColor}"/>`;
  }
}

// Define a class called Triangle that extends the Shape class
class Triangle extends Shape {
  // Method to render the triangle shape with a specified color
  render(shapeColor) {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${shapeColor}"/>`;
  }
}

// Export the Square, Circle, and Triangle classes as a module
module.exports = {
  Square,
  Circle,
  Triangle,
};