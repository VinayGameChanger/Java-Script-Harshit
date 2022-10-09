// let numbers =[0,1,2,3];
//prototype is only for function
//javascript make aray using array constructor
// let num=new Array(1,5,7);
// console.log(Array.prototype);
// console.log(Object.getPrototypeOf(numbers));//get protype of num,ber

//2015/ES6
//class keyword
//classes are fake in js
class CreateUser{
    constructor(firstName,lastName,age,email,address){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.email=email;
    this.address=address;
    }
    about(){return `${this.firstName} is ${this.age} year old`}
    is18(){return this.age>=18;}
    func(a){console.log(a);}
}
const user1=new CreateUser("vinay","sharma",7,"sharma@gmail.com","india")
//only use new keywprd to invoke the class constructor
console.log(user1);
console.log(user1.about());


console.log(Object.getPrototypeOf(user1));
user1.func("vinay sharma")