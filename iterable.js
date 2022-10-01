//iterables
//jispe hum for of loop laga ske
//strings ,arrays are iterable  

// let strings="abcdef";
// for(let a of strings){
//     console.log(a);
// }

// const arrays=["g","h","i","j"];
// for (let arr of arrays){
//     console.log(arr);
// }

// const user={
//     key1:"value1",
//     key2:"value2",
//     key3:"value3"
// }//object not iterable

//array like objects
//jinke pas length property hoti hai
//aur jisko ham index se access kar skte hai
//example: string
let strings="abcdef";
console.log(strings.length);
console.log(strings[2]);