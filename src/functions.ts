// Return Type
function getTime(): number {
  return new Date().getTime()
}
console.log(getTime())

// Void Return Type
function printHello(): void {
  console.log('Ahmed!')
}

// Parameters
function multiply(a: number, b: number) {
  return a * b
}
console.log(multiply(2, 5))

// Optional Parameters - the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0)
}

console.log(add(2, 5))

// Default Parameters
function pow(value: number, exponent: number = 10) {
  return value ** exponent
}

console.log(pow(10))

// Named Parameters
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor
}

console.log(divide({ dividend: 10, divisor: 2 }))

// Rest Parameters
function addNum(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0)
}

console.log(addNum(10, 10, 10, 10, 10))

// Type Alias
type Negate = (value: number) => number

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1

console.log(negateFunction(10))
