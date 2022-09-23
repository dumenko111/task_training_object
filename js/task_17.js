//написати скріпт, який по черзі запитує ч/з prompt ім'я, вік і ЗП
//і виводить в консоль об'єкт тільки з тими полями, які були вказані


const name = prompt('Enter name')
const age = prompt('Your age?')
const salary = prompt('Enter your salary')

// const user = {}

// if (name) user.name = name //в () перевіряється чи true, якщо так, то записується значеня з prompt
// if (age) user.age = age
// if (salary) user.salary = salary



//то саме що зверху, але робимо деструктуризацію всередині об'єкту
const user = {
    ...(name && { name }),
    ...(age && { age }),
    ...(salary && { salary }),
    
}

console.table(user)
