// // part 1

// function hello(){
//     console.log("Hello World");
// }
// hello();
// // or
// hello.call();

// // part 2

// //call apply bind
// //call
// const user1={
//     name:"vinay",
//     age:7,
//     about:function(){
//         console.log(`name is ${this.name} and age is ${this.age}`);
//     }
// }
// const user2={
//     name:"ajay",
//     age:8,
// }
// user1.about();
// user1.about.call(user2); //call argument is the value of this

// part 3
function about(hobby,favMusician){
    console.log(`name is ${this.name} and age is ${this.age} and ${hobby} and ${favMusician}`);
}
const user1={
    name:"vinay",
    age:7,
}
const user2={
    name:"ajay",
    age:8,
}
about(); //we can directly call about
about.call(user1,"guitar","blaclpink"); //call first argument is the value of this
         // call 2nd and 3rd value is the value of funvtion argumrnt about

//apply

about.apply(user2,["violin","bts"])//in apply we can pass function argument in array


//bind
const NewFunc=about.bind(user1,"flute","momo");//bind return function

NewFunc();