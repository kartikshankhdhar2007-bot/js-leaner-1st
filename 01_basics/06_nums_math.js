console.log("today we learn about the Numbers and Maths")

const score =458
console.log(score)

//another way 
const balance= new Number(100)
console.log(balance)

console.log("Number Function")

// Number Functions
console.log(balance.toFixed(3))
console.log(balance.toString())
console.log(balance.valueOf())
console.log(balance.toExponential(3))

const num= 10000000
console.log(num.toLocaleString('en-IN'))

const anum =123.456
console.log(anum.toPrecision(5))

//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++
console.log("Now we studing abhout maths")

console.log(Math.abs(-421));
console.log(Math.round(22.485894));
console.log(Math.floor(22.485894));
console.log(Math.ceil(22.485894));

console.log(Math.sqrt(1225))
console.log(Math.min(4,2,4,9,6,7,5,))
console.log(Math.max(4,2,4,9,6,7,5,))

/////============================= "Random Function " ====================================
//random function give the value between 0 and 1

console.log(Math.random());
console.log("lets make dice")
const max=6
const min=1
console.log(Math.floor(Math.random()*(max-min+1)) + min)