//написати ф-цію calculateAverage(), яка приймає певну к-сть аргументів
//і повертає їх середнє значення. всі аргументи будуть числами
//у стрілочних функції немає доступу до arguments, тому ми використовуємо REST

const calculateAverage = (...args) => {
    let sum = 0
    for (let i = 0; i < args.length; i+=1) {
        sum += args[i]
        
    }
    return sum / args.length
}


console.log(calculateAverage(1, 2, 3, 4)) //2.5
console.log(calculateAverage(14, 8, 2)) //8
console.log(calculateAverage(27, 43, 2, 8, 36)) //23.5
