const { Square, Circle, Triangle } = require('../lib/shapes');

describe('Square', () => {
  test('should set the color correctly', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.color).toBe('red');
  });

  test('should render the square with the correct color', () => {
    const square = new Square();
    square.setColor('blue');
    const renderedShape = square.render(square.color);
    expect(renderedShape).toBe('<rect x="50" width="200" height="200" fill="blue" />');
  });
});

describe('Circle', () => {
  test('should set the color correctly', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.color).toBe('green');
  });

  test('should render the circle with the correct color', () => {
    const circle = new Circle();
    circle.setColor('yellow');
    const renderedShape = circle.render(circle.color);
    expect(renderedShape).toBe('<circle cx="150" cy="100" r="80"  fill="yellow"/>');
  });
});

describe('Triangle', () => {
  test('should set the color correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('purple');
    expect(triangle.color).toBe('purple');
  });

  test('should render the triangle with the correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('orange');
    const renderedShape = triangle.render(triangle.color);
    expect(renderedShape).toBe('<polygon points="50,0 100,100 0,100" fill="orange" />');
  });
});