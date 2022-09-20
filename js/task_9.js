//створити ф-цію. multiplyNumber(obj)
//яка множить всі числові властивості об'єкту

const menu = {
    width: 200, 
    height: 300,
    title: 'My menu',
}

const multiplyNumber = (obj) => {
    const keys = Object.keys(obj) 

    for (const key of keys) {
        if (typeof obj[key] !== 'number') continue
        
        obj[key] *= 2
    }
}

console.log(multiplyNumber(menu))
console.table(menu)