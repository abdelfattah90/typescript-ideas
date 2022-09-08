// An enum is a special "class" that represents a group of constants
// (unchangeable variables).

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.North
console.log(currentDirection)

// Numeric Enums - Initialized
enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West,
}

console.log(CardinalDirections2.North)

console.log(CardinalDirections2.West)

// Numeric Enums - Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound)
console.log(StatusCodes.Success)
