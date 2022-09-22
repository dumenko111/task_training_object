//написати ф-цію, яка приймає масив чисел і знаходить найменше

const numbers = [12, 4, 55, 949, 3, 1, 56]

const foo = numb => Math.min(...numb)

console.log(foo(numbers))