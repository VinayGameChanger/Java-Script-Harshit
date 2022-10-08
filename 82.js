// const userMethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} year old}`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
//store the user method in function prototype
function createUser(firstName,lastName,age,email,address){
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    return user;
}
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} year old`
};
createUser.prototype.is18=function(){
    return this.age>=18;
};
const user1=createUser("vinay","sharma",7,"vinay@gmail","FCA-75")
const user2=createUser("ajay","nagar",8,"ajaynagar@gmail","FCA-76")
const user3=createUser("sunny","rajpoot",9,"sunnyraj@gmail","FCA-875")
console.log(createUser);
console.log(user1);
console.log(user1.about());