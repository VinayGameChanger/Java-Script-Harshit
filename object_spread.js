//spread operator in arrays
// const b1=[1,2,3];
// const b2=[5,6,7];
// const b3=[...b1, ...b2, 8];
// console.log(b3);


//spread operator in object
// const obj1={
//     key1 : "value1",
//     key2 : "value2"
// }
// const obj2={
//     key1:"valuenew",// if two or more key names are same then later value stored in the key
//     key3 : "value3",
//     key4 : "value4"
// }
// const newObj={...obj1,...obj2,key69:"value69"}
// console.log(newObj);

//make object through string
const objStr={..."abcdefghijklmnopqrstuvwxyz"};
console.log(objStr);  //index become key and value become a,b,c

//making objects through array

const array1=["item1","item2","item3"];
const objArr={...array1}
console.log(objArr);