//lexical scope

const myVar="value1";

function myApp(){

    function myFunc(){
        const myVar="value69";
        const myFunc2= function(){
            console.log("inside myFunc2",myVar);
        }
    
    myFunc2();
}
console.log(myVar);
myFunc();

}
myApp();