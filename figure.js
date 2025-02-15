class Figure {
    #x;
    #y;


    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    square() {
        return undefined;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }
}


class Circle extends Figure {
    #r;


    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }

    square() {
        return Math.PI * this.#r ** 2;
    }

    get r() {
        return this.#r;
    }
}


class Rectangle extends Figure {
    #h;
    #w;


    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }

    square() {
        return this.#h * this.#w;
    }

    get h() {
        return this.#h;
    }

    get w() {
        return this.#w;
    }
}

const figure = new Figure(0, 0);
console.log(`Центр фигуры: (${figure.x}, ${figure.y})`);
console.log(`Площадь фигуры: ${figure.square()}`);

const circle = new Circle(2, 5, 3);
console.log(`Центр круга: (${circle.x}, ${circle.y})`);
console.log(`Радиус круга: ${circle.r}`);
console.log(`Площадь круга: ${circle.square()}`);

const rectangle = new Rectangle(10, 15, 5, 8);
console.log(`Центр прямоугольника: (${rectangle.x}, ${rectangle.y})`);
console.log(`Высота прямоугольника: ${rectangle.h}`);
console.log(`Ширина прямоугольника: ${rectangle.w}`);
console.log(`Площадь прямоугольника: ${rectangle.square()}`);