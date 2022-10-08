//new keyword
//1. it create a empty {}
//this refer to empty obj
//2. it return the same
//3. automatic assign proto value to function prototype
function createUser(firstName,lastName,age,email,address){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.email=email;
    this.address=address;
}
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} year old`
};
createUser.prototype.is18=function(){
    return this.age>=18;
};
const user1=new createUser("vinay","sharma",7,"vinay@gmail","FCA-75")
const user2=new createUser("ajay","nagar",8,"ajaynagar@gmail","FCA-76")
const user3=new createUser("sunny","rajpoot",9,"sunnyraj@gmail","FCA-875")
console.log(createUser);
console.log(user1);
console.log(user1.about());