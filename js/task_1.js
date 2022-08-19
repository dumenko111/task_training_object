// Основи об'єкту.
// напиши скріпт, який додає до обє'кта user послідовно:
// добавляє поле mood зі значенням 'happy'
// заміняє hobby на 'skydiving'
// заміняє значення premium на false
// виводить вміст об'єкту у форматі ключ: значення
// використовуючи Object.keys() і for...of
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}
// user.mood = 'happy' можна так добавити значення
user ['mood'] = 'happy' // або через квадратні скобки
// console.table(user)

// user.hobby = 'skydiving' міняємо значення через крапку
user ['hobby'] = 'skydiving' // міняємо значення через квадратні скобки
// console.table(user)

user.premium = 'false'
// console.table(user)

for (const key in user) { // перебираємо об'єкт через цикл for in
    // console.table(`${key}: ${user[key]} `)
}
const userKeys = Object.keys(user) // перебираємо через for...of
for (const key of userKeys) {
    console.table(`${key}: ${user[key]} `)
}
    
