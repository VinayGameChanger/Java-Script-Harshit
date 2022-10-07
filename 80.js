// const userMethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} year old}`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// function createUser(firstName,lastName,age,email,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.email=email;
//     user.address=address;
//     user.about=userMethods.about,
//     user.is18=userMethods.is18
//     return user;
// }
// const user1=createUser("vinay","sharma",7,"vinay@gmail","FCA-75")
// const user2=createUser("ajay","nagar",8,"ajaynagar@gmail","FCA-76")
// const user3=createUser("sunny","rajpoot",9,"sunnyraj@gmail","FCA-875")

// console.log(user1);

// part2 (create obj uaing proto)
const userMethods={
    about:function(){
        return `${this.firstName} is ${this.age} year old}`
    },
    is18:function(){
        return this.age>=18;
    }
}
function createUser(firstName,lastName,age,email,address){
    const user=Object.create(userMethods);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    return user;
}

const user1=createUser("vinay","sharma",7,"vinay@gmail","FCA-75")
const user2=createUser("ajay","nagar",8,"ajaynagar@gmail","FCA-76")
const user3=createUser("sunny","rajpoot",9,"sunnyraj@gmail","FCA-875")

console.log(user1);
console.log(user1.about());







