//class practise
//object also called instance

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){return `${this.name} is eating`}
    isSuperCute(){return this.age<=1;}
    isCute(){return `yes`;}
}
const ani1=new Animal("zebra",7)
console.log(ani1);
console.log(ani1.eat());
console.log(ani1.isSuperCute());
console.log(ani1.isCute());

//Dog class
// class Dog{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){return `${this.name} is eating`}
//     isSuperCute(){return this.age<=1;}
//     isCute(){return `yes`;}

// }

//dog class is similiar to animal class
//making dog class again using extend
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age)//animal constructor
        this.speed=speed;
    }
    eat(){
        return `Modified Eat : ${this.name} is eating`
    }
    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }
}
const tommy=new Dog("Jerry",1,45);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.run());