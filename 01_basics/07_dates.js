/// Dates

let myDate= new Date();
/*console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toString());*/

// 
console.log("now user create")
let myCreate=new Date(2026,6,11);
console.log(myCreate.toDateString())
 
let date = new Date("09-21-2026")
console.log(date.toDateString())
console.log(date.toLocaleString())

/////time
console.log("now about time")
let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(myCreate.getTime());
console.log(Math.floor(Date.now()/3600000)) // now miliseconds are converted into hour
console.log(myDate.toLocaleString('default' , {weekend:"long"}));
