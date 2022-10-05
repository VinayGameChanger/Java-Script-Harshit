//object ke ander function ko ham method bolte hai
// const user1={
//     firstname:"vinay",
//     age:8,
//     about:function(){
//         console.log(this);
//         console.log(this.firstname,this.age);
//     }
// }

//don't do this mistake
//part1a
// const myFunc=user1.about; // here we are not calling about function but actually storing
//                           //about fun in other variable
// myFunc();  //here we are calling stored about function thats why error

// part1b
//fixing error
// const myFunc=user1.about.bind(user1);
// myFunc();


// part 2
// const user1={
//     firstname:"vinay",
//     age:8,
//     about:()=>{
//         console.log(this);
//         console.log(this.firstname,this.age);
//     //arrow function take this from their sourrounding or window
// //we cannot change arrow function this even after call(this) 
//    }
// }

// user1.about();

// part 3 
//short syntax of method in object
const user1={
    firstname:"vinay",
    age:8,
    about(){//short syntax remove key and function
        console.log(this.firstname,this.age);
    }
}
user1.about();