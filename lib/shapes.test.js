const { Circle , Square , Triangle } = require('./lib/shapes')

const shape1 = new Triangle();
shape.setColor("blue");
expect(shape1.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape2 = new Circle();
shape.setColor("purple");
expect(shape2.render()).toEqual('<circle cx="150" cy="100" r="80" fill="purple" />');

const shape3 = new Square();
shape.setColor("green");
expect(shape3.render()).toEqual('<rect width="100%" height="100%" fill="green" />');