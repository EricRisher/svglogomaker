const { Square, Circle, Triangle } = require('../lib/shapes');

// Test suite for the Square class
describe('Square', () => {
    // Test case to check if the color is set correctly
    test('should set the color correctly', () => {
        // Creating a new instance of the Square class
        const square = new Square();
        // Setting the color of the square to 'red'
        square.setColor('red');
        // Expecting the color of the square to be 'red'
        expect(square.color).toBe('red');
    });

    // Test case to check if the square is rendered with the correct color
    test('should render the square with the correct color', () => {
        // Creating a new instance of the Square class
        const square = new Square();
        // Setting the color of the square to 'blue'
        square.setColor('blue');
        // Rendering the square with the specified color
        const renderedShape = square.render(square.color);
        // Expecting the rendered shape to be a rectangle with the specified color
        expect(renderedShape).toBe('<rect x="50" width="200" height="200" fill="blue" />');
    });
});

// Test suite for the Circle class
describe('Circle', () => {
    // Test case to check if the color is set correctly
    test('should set the color correctly', () => {
        // Creating a new instance of the Circle class
        const circle = new Circle();
        // Setting the color of the circle to 'green'
        circle.setColor('green');
        // Expecting the color of the circle to be 'green'
        expect(circle.color).toBe('green');
    });

    // Test case to check if the circle is rendered with the correct color
    test('should render the circle with the correct color', () => {
        // Creating a new instance of the Circle class
        const circle = new Circle();
        // Setting the color of the circle to 'yellow'
        circle.setColor('yellow');
        // Rendering the circle with the specified color
        const renderedShape = circle.render(circle.color);
        // Expecting the rendered shape to be a circle with the specified color
        expect(renderedShape).toBe('<circle cx="150" cy="100" r="80"  fill="yellow"/>');
    });
});

// Test suite for the Triangle class
describe('Triangle', () => {
    // Test case to check if the color is set correctly
    test('should set the color correctly', () => {
        // Creating a new instance of the Triangle class
        const triangle = new Triangle();
        // Setting the color of the triangle to 'purple'
        triangle.setColor('purple');
        // Expecting the color of the triangle to be 'purple'
        expect(triangle.color).toBe('purple');
    });

    // Test case to check if the triangle is rendered with the correct color
    test('should render the triangle with the correct color', () => {
        // Creating a new instance of the Triangle class
        const triangle = new Triangle();
        // Setting the color of the triangle to 'orange'
        triangle.setColor('orange');
        // Rendering the triangle with the specified color
        const renderedShape = triangle.render(triangle.color);
        // Expecting the rendered shape to be a triangle with the specified color
        expect(renderedShape).toBe('<polygon points="50,0 100,100 0,100" fill="orange" />');
    });
});