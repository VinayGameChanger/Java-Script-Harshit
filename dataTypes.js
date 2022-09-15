//primitive vs reference datatype
let num1=6;
let num2=num1;
console.log("The value of num1",num1);
console.log("The value of num2",num2);
num1++;
console.log("after pushing");
console.log("The value of num1",num1);//refer img stored in folder
console.log("The value of num2",num2);


//reference data type
//array
let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after pushing");
console.log("array1",array1);
console.log("array2",array2);
