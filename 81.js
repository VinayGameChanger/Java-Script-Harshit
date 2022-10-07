//function in js can also br treated as an object
function hello(){
    console.log("Hello World");
}
//js function ==> function +object
// console.log(hello.name);//name property give function name

// we cam also add key value in function

hello.myOwnProperty="Very unique value";
// console.log(hello);

//function provide more useful property

//function hame dete hai empty object or free space and that object is called prototype

console.log(hello.prototype);//empty object for use

// only function provide prototype property
//we can add property in prototype empty obj

hello.prototype.key1="value1";
hello.prototype.key2="value2";
hello.prototype.myfunc=function(){
    return "inside prototype";
}
console.log(hello.prototype);

console.log(hello.prototype.myfunc());