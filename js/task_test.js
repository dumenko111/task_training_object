function includes(array, value) {
  let result = false
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i])
    if (array[i] === value) {
      result = true
    } 
  }
  return result
}

console.log(includes([1, 2, 3, 4, 5], 3))
console.log(includes([1, 2, 3, 4, 5], 17))
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"))
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))
console.log(includes(["apple", "plum", "pear", "orange"], "plum"))
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"))
console.log(includes([]))
