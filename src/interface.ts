// Type Aliases
// Try creating a new Car using the alias provided
type CarYear = number
type CarModel = string

type ToyotaCar = {
  year: CarYear
  model: CarModel
}
const carYear: CarYear = 2022
const carModel: CarModel = 'Corolla'
const car: ToyotaCar = {
  year: carYear,
  model: carModel,
}
console.log(car)

// Interfaces
// Try creating a new interface using it below
interface RectangleSharp {
  height: number
  width: number
}
const rectangle: RectangleSharp = {
  height: 20,
  width: 10,
}
console.log(rectangle)

// Extending Interfaces
// Try creating a new interface and extending it like below
interface RectangleBig {
  height: number
  width: number
}

interface ColoredRectangle extends RectangleBig {
  color: string
}
const coloredRectangle: ColoredRectangle = {
  height: 200,
  width: 100,
  color: 'red',
}
console.log(coloredRectangle)
