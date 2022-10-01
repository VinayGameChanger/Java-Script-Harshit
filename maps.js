//map object is different than map method
//maps is also iterable
//map also store key value pair
//map store value in orderly fashion

// previously we study object literal or commmon object 
// where
// keys are in string or symbol
// const person={
//     name:"vinay",
//     age:26,
//     1:"one"
// }
// for(let key in person){
//     console.log(typeof key); // all keys are in string
// }

//map object syntax
// const person= new Map(); //empty map
// console.log(typeof person);
// console.log(person);

// add key value pair in map
// person.set("name","vinay"); //careful use set not map
// person.set("age",26);
// person.set(1,"one");
// console.log(person);

//difference between object andmap 
//in map we can store key of any type like string,integer,array,function,symbol


//how to access key value pair in map
// console.log(person.get("name")); //name in string
// console.log(person.get(1)); //number in number
// console.log(person.keys()); // return all keys in a map

// for(let [key,value] of person){// map destructures
//     console.log(key,value);
// }

// const human = new Map([["name","ajay"],["name2","sunny"]]);
// console.log(human);

const person1={
    ids:01,
    name:"vinay"
}
const person2={
    ids:02,
    name:"vinita"
}
const info=new Map();
info.set(person1,{age:7,gender:"male"});
info.set(person2,{age:8,gender:"female"});
console.log(info);
console.log(person1.name);
console.log(info.get(person1));