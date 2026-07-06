//Primetive 
// It is of 7 type :- String , Number ,Boolerean ,undefined, null, symbol, Big Int

const score=100;
const scoreValue=100.44
const isLoggedIn= true;
const name= "Kartik";
const temp=null
let userEmail;        //undefined

let id=Symbol("123")  //symbol
let anotherid=Symbol("123")
console.log(id==anotherid);

const bigNumber=48713379723979366384284823683265n


//Refenece (Not Primetive)
// Array, object,function

const heroes=["Shaktiman","ironman"]

const myobj={
    name:"kartik" ,
    age : 19 ,

}

const myfuntion= function(){
    console.log("hello world")
}

//determine the datatype of variable by typeof function
console.log(typeof myfuntion)