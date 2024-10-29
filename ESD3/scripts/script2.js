class Polygon {
    constructor(width = undefined, height = undefined) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {}

    calculatePerimeter() {}
}


class Rectangle extends Polygon {
    constructor(width, height) {
        super(width, height); 
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side); 
    }
}

class Circle extends Polygon {
    constructor(radius) {
        super(); 
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Polygon {
    constructor(base, height) {
        super(base, height);
    }

    calculateArea() {
        return 0.5 * this.width * this.height;
    }

    calculatePerimeter() {
        const side = Math.sqrt((this.width / 2) ** 2 + this.height ** 2);
        return this.width + 2 * side;
    }
}

const shapes = [
    new Rectangle(10, 5),
    new Square(4),
    new Circle(7),
    new Triangle(8, 5)
];

shapes.forEach(shape => {
    console.log(`${shape.constructor.name} area is: ${shape.calculateArea()}`);
    console.log(`${shape.constructor.name} perimeter is: ${shape.calculatePerimeter()}`);
});
