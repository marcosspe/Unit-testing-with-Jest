// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(7,3))

// module.exports = { sum };


const fromEuroToDollar = (Value) => {
    return Value * 1.2
}

const fromDollarToYen = (Value) => {
    return Value * 106.5
}

const fromYentoPound = (Value) => {
    return Value * 0.0067
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYentoPound};