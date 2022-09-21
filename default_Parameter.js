//Default Parameter

//Before ES6 or ES2015 to set default parameter
// function addition(a,b){
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return console.log(a+b);
// }

//After ES6
function addition(a,b=0){
    return console.log(a+b);
}
addition(10,5);
addition(5);