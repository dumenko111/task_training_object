//написати функцію, яка приймає інфо про користувача і виводить її в консоль

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

// const showUserInfo = (user) => {
//     const {name, age, hobby, premium} = user //робимо деструктуризацію в змінній
//     console.log(`name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`)
// }

// console.log(showUserInfo(user))



const showUserInfo = ({name, age, hobby, premium}) => { //робимо деструктуризацію в параметрах ф-ції
console.log(`name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`)
}

console.log(showUserInfo(user))