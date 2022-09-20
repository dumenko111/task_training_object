//масив об'єктів. Написати ф-цію calcTotalPrice(stones, stoneName)
//яка приймає масив об'єктіві строку з ім'ям каменя.
//ф-ція повертає загальну вартість каменів з таким іменем
//ціною і к-стю із об'єктом

const stone = [
    { name: 'Смарагд', price: 1300, quantity: 4 },
    { name: 'Діамант', price: 2700, quantity: 3 },
    { name: 'Сапфір', price: 400, quantity: 7 },
    { name: 'Щебінь', price: 200, quantity: 2 },
]

const calcTotalPrice = (stones, stoneName) => {
    for (const stone of stones) {
        if (stoneName === stone.name)
            return `Choice ${stoneName}, price - ${stone.price}, total = ${stone.price * stone.quantity}`
    }
    return 0
}


console.log(calcTotalPrice(stone, 'Щебінь'))
