// метод Object.valuse()
// Є об'єкт в якому зберігають зарплати нашої команди
// потрібно підсумувати всі ЗП і добавити в змінну sum
// яущо об'єкт salaries пустий то результат має бути 0

let total = 0

const salaries = {
    Jack: 1500,
    John: 2000,
    James: 2500,
}

const salariesValues = Object.values(salaries) // робить масив із значень
for (const salary of salariesValues) {
    total += salary
}

console.log(total)