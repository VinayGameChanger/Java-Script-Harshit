// const user1={
//     firstNanme:"vinay",
//     lastName:"sharma",
//     email:"vinay9650833806@gmail.com",
//     age:2,
//     address:"HouseNo,colony,pincode,state",
//     about:function(){
//         return `${this.firstName} is ${this.age} year old}`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }

//if we want to make same object for different user it is very tedious work
//so to solve this problem we will create a function
// function() take key's value as input and return an object
function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} year old}`
    },
    user.is18=function(){
        return this.age>=18;
    }
    return user;
}
const user1=createUser("ajay","nagar",7,"ajaynagar@gmail.com","houseNo dabua colony 121001");
console.log(user1);

console.log(user1.is18());