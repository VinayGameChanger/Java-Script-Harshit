//array destruction

//old method
const myArray=["item1","item2","item3"];
// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log(myVar1,myVar2);

//new method array destruction
let[myVar1, ,myVar2]=myArray;//vacant space 
 //to skip assignment of variable
console.log(myVar1,myVar2);

//to create new sub array use slice
let newSubArray=myArray.slice(1);
console.log(newSubArray);

//to create new sub array use array destruction
let [ , ,...newDesSubArray]=myArray;
console.log(newDesSubArray);