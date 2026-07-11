//////================= Array ===========
const myArr= [0,1,2,3,4]
 
// another way 
const myArr1= new Array("spider-man", "shakti man")
console.log(myArr[2])

//     Array Mathod
myArr.push(5);   /// push add element in the arraya 
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(3)
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.indexOf(3));

const hdk=myArr.join()
console.log(myArr)
console.log(typeof hdk)

//////  slice and splice
console.log("now slice")
console.log("a",myArr)
const myn=myArr.slice(1,3);
console.log("b",myArr)
console.log(myn)

console.log("now splice")
const myn2=myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)