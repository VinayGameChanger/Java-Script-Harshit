//new keyword
//1. it create a empty {}
//this refer to empty obj
//2. it return the same
//3. automatic assign proto value to function prototype

//constructor function
function CreateUser(firstName,lastName,age,email,address){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.email=email;
    this.address=address;
}
CreateUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} year old`
};
CreateUser.prototype.is18=function(){
    return this.age>=18;
};
const user1=new CreateUser("vinay","sharma",7,"vinay@gmail","FCA-75")
const user2=new CreateUser("ajay","nagar",8,"ajaynagar@gmail","FCA-76")
const user3=new CreateUser("sunny","rajpoot",9,"sunnyraj@gmail","FCA-875")
console.log(CreateUser);
console.log(user1);
console.log(user1.about());

//for in loop to print key in an object
for(let key in user1){
    if(user1.hasOwnProperty(key)){//only print user property not prototype
        console.log(key);
    }
}