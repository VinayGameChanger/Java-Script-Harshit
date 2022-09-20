//undefined


let firstName;
console.log(firstName);

console.log(typeof firstName);

//null

let myVariable=null;
console.log(myVariable);
console.log(typeof myVariable); //bug typeof of null is null but due to bug it is showing object

//BigInt
let myNumber=123;
console.log(Number.MAX_SAFE_INTEGER); // max value that can be stored in a variable

myNumber=BigInt(466455454545446654919111155611917117);// or 44445n
console.log(myNumber);
