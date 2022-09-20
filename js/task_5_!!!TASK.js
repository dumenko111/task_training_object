// // Працюємо з колекцією товарів в корзині
// //*- getItems()
// //*- add(product)
// //*- remove(productName)
// //*- clear()
// //*- countTotalPrice()
// //*- increaseQuantity(productName)
// //*- descreaseQuantity(productName)


// // { name: 'apple', price: 50 }
// // { name: 'grape', price: 70 }
// // { name: 'lemon', price: 60 }
// // { name: 'strawberries', price: 110 }

const cart = {
    items: [],
    getItems() { //функція getItems виводить в консоль список товарів з масиву items
        return this.items
    },
    
    add(product) {
        for (const item of this.items) {
            
            if (item.name === product.name) {
                item.quantity += 1
                return
            }
        }
        const newProduct = {
            ...product,
            quantity: 1,
        }
        this.items.push(newProduct);
    },
    
    remove(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            const { name } = this.items[i]
            if (productName === name) {
                console.log('такий товар вже є -', productName)
            
                this.items.splice(i,1)
            }
        }
     },
    clear() { 
        return this.items = []
    },
    countTotalPrice() {
        let sum = 0
        for (const item of this.items) {
            sum += item.price * item.quantity
            
        }
        return sum
     },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (productName === item.name) {
                item.quantity +=1
            }
        }
     },
    descreaseQuantity(productName) {
    for (const item of this.items) {
            if (productName === item.name) {
                item.quantity -=1
            }
        }
     },
}

//виклик функції add(product) добавляємо товари до корзини
cart.add({ name: 'apple', price: 50 })
cart.add({ name: 'lemon', price: 60 })
cart.add({ name: 'lemon', price: 60 })
cart.add({ name: 'strawberries', price: 110 })
cart.add({ name: 'strawberries', price: 110 })
cart.add({ name: 'strawberries', price: 110 })

//виводимо items, тобто корзину товарів, після того як добавили товари за дпомогою функції add
// console.table(cart.getItems()) 

//функція remove видаляє товар з корзини
// console.log(cart.remove('strawberries')) 

console.table(cart.getItems()) 

// console.log(cart.clear()) //виклик функції, яка очищує корзину товарів

console.log('Total: ', cart.countTotalPrice()) // виводить суму вартості товарів


console.log(cart.increaseQuantity('apple')) //добавляє на одиницю к-сть певного товару
console.log(cart.increaseQuantity('apple'))//добавляє на одиницю к-сть певного товару

console.log(cart.descreaseQuantity('strawberries'))//зменшує на одиницю к-сть товару
console.log(cart.descreaseQuantity('strawberries'))//зменшує на одиницю к-сть товару

console.table(cart.getItems())