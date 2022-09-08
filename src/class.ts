// Members: Types
class Car {
  name: string
  year: number
  constructor(name: string, year: number) {
    this.name = name
    this.year = year
  }
}
const myCar = new Car('Ford', 2022)
console.log(myCar)

// Members: Visibility
class Person {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
  public getName = (): string => this.name // inline func
}
const person = new Person('Ahmed')
console.log(person.getName())

// Parameter Properties
class Player {
  public constructor(private name: string) {} // name is a private member variable
  public getName(): string {
    return this.name
  }
}

const player = new Player('Omar')

console.log(player.getName())

//ReadOnly
class Animal {
  private readonly name: string
  public constructor(name: string) {
    // name cannot be changed after this initial definition,
    // which has to be either at it's declaration or in the constructor.
    this.name = name
  }
  public getName(): string {
    return this.name
  }
}

const animal = new Animal('Cat')
console.log(animal.getName())

// Inheritance: Implements
interface Shape {
  getArea: () => number
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}
  public getArea(): number {
    return this.width * this.height
  }
}

const myRect = new Rectangle(10, 20)
console.log(myRect.getArea())

// Inheritance: Extends
interface Shape2 {
  getArea: () => number
}

class Rectangle2 implements Shape2 {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}
  public getArea(): number {
    return this.width * this.height
  }
}

class Square2 extends Rectangle2 {
  public constructor(width: number) {
    super(width, width)
  }
  // getArea gets inherited from Rectangle
}

const mySq2 = new Square2(20)
console.log(mySq2.getArea())

// Override

interface Shape3 {
  getArea: () => number
}

class Rectangle3 implements Shape3 {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`
  }
}

class Square3 extends Rectangle3 {
  public constructor(width: number) {
    super(width, width)
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`
  }
}

const mySq3 = new Square3(20)
console.log(mySq3.toString())

// Abstract Classes
abstract class Polygon {
  public abstract getArea(): number

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`
  }
}

class Rectangle4 extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super()
  }

  public getArea(): number {
    return this.width * this.height
  }
}

const myRect4 = new Rectangle4(10, 20)
console.log(myRect4.getArea())
