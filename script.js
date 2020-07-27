function Counter (initialNumber = 0) {
    this.number = initialNumber
}

Counter.prototype.inc = function () {
    this.number = this.number + 1
}
Counter.prototype.dec = function () {
    this.number = this.number - 1
}       

const counter1 = new Counter(5)

console.log(typeof Counter)
console.log(Counter.prototype)
console.log(Counter.prototype.constructor === Counter)

// it can be call without new
// but it is not a good pratcie
Counter()

class CounterClass {

    constructor(initialNumber = 0) {
        this.number = initialNumber
    }

    inc() {
        this.number = this.number + 1
    }

}

CounterClass.prototype.dec = function () {
    this.number = this.number - 1
}

const counter2 = new CounterClass(5)

console.log(typeof CounterClass)
console.log(CounterClass.prototype)
console.log(CounterClass.prototype.constructor === CounterClass)

// can't call without new!
try {
    CounterClass()
} catch (error) {
    console.error(error)
}