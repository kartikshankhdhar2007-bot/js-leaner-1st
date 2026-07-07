const name ="Kartik"
const myage= 19
//old way to print together
console.log(name+"my age is "+ myage)

//modern way 
console.log(`Hello My Name is ${name} , I am ${myage}`)

//another way to declare the string
const gameName=new String("Mario")

console.log(gameName.length)
console.log(gameName[3])
console.log(gameName.toUpperCase())
console.log(gameName.__proto__)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));
console.log(gameName);
