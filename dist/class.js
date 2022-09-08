"use strict";
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const myCar = new Car('Ford', 2022);
console.log(myCar);
class Person {
    constructor(name) {
        this.getName = () => this.name;
        this.name = name;
    }
}
const person = new Person('Ahmed');
console.log(person.getName());
class Player {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const player = new Player('Omar');
console.log(player.getName());
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const animal = new Animal('Cat');
console.log(animal.getName());
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square2 extends Rectangle2 {
    constructor(width) {
        super(width, width);
    }
}
const mySq2 = new Square2(20);
console.log(mySq2.getArea());
class Rectangle3 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
class Square3 extends Rectangle3 {
    constructor(width) {
        super(width, width);
    }
    toString() {
        return `Square[width=${this.width}]`;
    }
}
const mySq3 = new Square3(20);
console.log(mySq3.toString());
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle4 extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myRect4 = new Rectangle4(10, 20);
console.log(myRect4.getArea());
//# sourceMappingURL=class.js.map