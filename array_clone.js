//how to clone array

let array1=["item1","item2"];

//1st Method simple copy paste
// let array2=["item1","item2"];
// console.log(array2===array1); //false because in javascript array 
// is considered as object so the operator === only return true if both array have the same reference

//Method 2 using slice method
// let array2=array1.slice(0);

//Method 3 concat using blank array
// let array2=[].concat(array1);


//Method 4 spread operator
let array2=[...array1];


array1.push("item3");
console.log(array2===array1)
console.log("array1 is",array1);
console.log("array2 is",array2);