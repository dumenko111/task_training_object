//використати Object.entries і деструктиризацію написати
//скріпт, який виводить вміст об'єкту у форматі ключ:значення

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

const entryUser = Object.entries(user)
console.log(entryUser) 

for (const [key, value] of entryUser) { //в [key, value] деструктиризація з об'єкту user
    // console.log(key)
    // console.log(value)
    // console.log(`${key}: ${value}`)
}
