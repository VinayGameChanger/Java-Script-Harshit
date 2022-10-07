const obj1={
    key1:"value1",
    key2:"value2"
}

// const obj2={};

// obj2.key3="value3";
// console.log(obj2.key1);//undefined as usual

// part2
//second way to create a empty obj and assign a __proto__ to it
// const obj2=Object.create(obj1);
// console.log(obj2.key1);//obj2 is empty but a proto is assigned to obj2 
                        //it will check obj1 next to check value
// console.log(obj2);
// console.log(obj1);

//in official ecma script documentation 
//proto is written as [[prototype]]

//how to print proto
// console.log(obj1.__proto__);
