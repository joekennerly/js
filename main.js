const test = (x) => x > 9 ? "ten or higher" : x === 9 ? "nine" : x === 8 ? "eight" : "negative"

console.log(test(10))
console.log(test(9))
console.log(test(8))
console.log(test(7))