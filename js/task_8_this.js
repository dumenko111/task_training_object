//калькулятор і this
//створити об'єкт calculator(калькулятор) з 3ма методами
//
//read(a, b) - отримує два значення
//і зберігає їх як властивості об'єкту

//sum() - повертає суму збережених значень

//mult() - перемножує збережені значення і повертає результат

const calculator = {
    
    read(a, b) { //ф-ція приймає два значення і зберігає їх
        this.a = a
        this.b = b
    },
    sum() {
        return this.a + this.b 
    },
    mult() {
        return this.a * this.b
    },
}

console.log(calculator.read(5, 10))
console.log(calculator.sum())
console.log(calculator.mult())
