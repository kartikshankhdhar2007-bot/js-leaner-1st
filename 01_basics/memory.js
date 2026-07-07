console.log("Kartik");

// Memory is of two types 
// stack(Primetive), Heap(Non-Primitive,Reference)

/* stack memory copy the value but heap memory do not copy the value it refer the value if we
 changed in second value then it also reflect in 1st variavle but it is not possible in stack memory
*/
console.log("this is output of stack memory")
let myEmail="kartik@mail.com"
let anotherVariable=myEmail

console.log(myEmail)
console.log(anotherVariable)

anotherVariable="Helloworld"
console.log(anotherVariable)


//heap memory 
console.log("this is out of heap memory")
let userone={
    bankName:"Bob",
    upiID:"8fgd@ybl",
} 
let userTwo=userone;
userTwo.bankName="sbi"
console.log(userTwo.bankName)
console.log(userone.bankName)