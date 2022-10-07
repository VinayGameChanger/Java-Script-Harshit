// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.email=email;
//     user.address=address;
//     user.about=function(){
//         return `${this.firstName} is ${this.age} year old}`
//     },
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user;
// }
// const user1=createUser("ajay","nagar",7,"ajaynagar@gmail.com","houseNo dabua colony 121001");
// console.log(user1);

// console.log(user1.is18());

//if we wan to create data for 1 million user than this method(function in object called method)
//we also be created 1 million times which takes heavy amount of spaces in memory
//so how to solve
function about(){
    return `${this.firstName} is ${this.age} year old}`
}
function is18(){
    return this.age>=18;
}
function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about=about,
    user.is18=is18
    return user;
}
const user1=createUser("vinay","sharma",7,"vinay@gmail","FCA-75")
const user2=createUser("ajay","nagar",8,"ajaynagar@gmail","FCA-76")
const user3=createUser("sunny","rajpoot",9,"sunnyraj@gmail","FCA-875")

console.log(user1,user2,user3);