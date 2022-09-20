//написати об'єкт lader - об'єкт
//який дозволяє підніматися вверхі спускатися
//прикладроботи має бути таким

//ladder.showStep() - показує сходинку на якій ми зараз знаходимося
//ladder.up()
//ladder.up()
//ladder.showStep() // 2
//ladder.down() // 1
//ladder.up()
//ladder.showStep() // 1

const ladder = {
    step: 0,
    showStep() {
        console.log(this.step)
    },
    up() {
        this.step ++
    },
    down() {
        if (!this.step) return
        this.step --
    },
}

console.log(ladder.step)
ladder.up()
ladder.up()
ladder.up()
console.log(ladder.step)
ladder.down()
ladder.down()
ladder.down()
ladder.down()
console.log(ladder.step)