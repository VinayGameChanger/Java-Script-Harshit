//getter and setters
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
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
}

const person1= new Person("vinay","sharma",9)
console.log(person1);
console.log(person1.fullName);

//we call method but not property
console.log(person1.lastName);
console.log(person1.fullName); //
//we want to call method without using parenthesis just write get in function declaration start

// now we want to change
person1.fullName="Ajay Nagar";
console.log(person1.fullName);//nothing happens