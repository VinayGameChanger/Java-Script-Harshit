//how to iterate object
const human={
    name:"vinay",
    age:26,
    hobbies:["manga","pubg","youtube"]
}


//for in loop(1st method)
// for (let key in human){
//     console.log(key,":",human[key]);
// }

//object.key method (2nd Method)

// console.log(Object.keys(human));

//for of
for(let key of Object.keys(human)){
    console.log(human[key]);
}