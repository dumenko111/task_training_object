//ф-ція сортування з використанням деструктиризації
//алфавітне сортування

const arr = ['HTML', 'JavaScript', 'Algol', 'Python', 'Basic']

const sortStringArray = stringArray => {
    const sortedArray = stringArray.slice(0)

    for (let i = sortedArray.length - 1; i > 0; i -= 1) {
        for (let j = 0; j < i; j += 1) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // const temp = sortedArray[j]
                // sortedArray[j] = sortedArray[j + 1]
                // sortedArray[j+1] = temp
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]]
                //міняє місцями елементи при сортуванні
            }
        }
    }
        return sortedArray
}

console.table(arr)
console.table(sortStringArray(arr))