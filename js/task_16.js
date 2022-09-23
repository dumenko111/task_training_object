//написати ф-цію getObjectWithoutProperty(назва властивості), 
//яка приймає об'єкт і об'єкт і повертає копію об'єкту без (назва властивості)

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

const getObjectWithoutProperty = (obj, name) => {
    const newObj = { ...obj }
    delete newObj[name] 
    return newObj
   
}

console.table(user)
const newUser = getObjectWithoutProperty(user, 'name')
 console.table(newUser)