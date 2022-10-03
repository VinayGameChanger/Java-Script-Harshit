//methods
// function inside object
// part1 
// const person={
//     firstName:"ajay",
//     age:7,
//     tutor:function(){
//         console.log(this)
//     },
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }} //this is that object which object is calling the function//template string
// person.about();
// person.tutor();


// part2
const personalInfo=function(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}
const person1={
    firstName:"ajay",
    age:7,
    about:personalInfo,
}
const person2={
    firstName:"sunny",
    age:8,
    about:personalInfo,
}
const person3={
    firstName:"vinay",
    age:9,
    about:personalInfo,
}
person1.about();
person2.about();
person3.about();
