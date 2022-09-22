//callback function
// we pass function as a parameter input and call that function
function myfunc2(name){
    console.log(`Hello ${name} are you calling me`);
}

const myFunc1 = function(callback){
    console.log("You want to call");
callback("vinay");
}


myFunc1(myfunc2);
