//static method and property
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    static property="This is static property "

static classInfo(){
    return console.log("It can only be called using class name");
}
    //get convert function to property
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    //to change the values
    set fullName(fullName){
        const[firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
    eat(){return `${this.name} is eating`}
    isSuperCute(){return this.age<=1;}
    isCute(){return `yes`;}
}

Person.classInfo();
console.log(Person.property);