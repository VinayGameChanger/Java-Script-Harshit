//param destrucring

//uses in
//object
//react

const human={
    name:"vinay",
    gender:"male",
    age:26
}


// function getDetails(obj){
//     console.log(obj.name);
//     console.log(obj.age);
// }
// getDetails(human);

//after parameter destructuring
const getDetails=({name,age})=>{
    console.log(name);
    console.log(age);

}
getDetails(human);