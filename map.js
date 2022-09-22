//map method
// it gives an array in return so use return keyword always otherwise undefined return
// map is a callback function because it's input is function


// const numbers=[2,4,5,9];
// const returnedArray= numbers.map(function(number,index){
//     return `index : ${index},${number*number}`;
// })
// console.log(returnedArray);


//to get first name of nested array
const users=[
    {userId:1,firstName:"Vinay",gender:"male"},
    {userId:2,firstName:"Sunny",gender:"male"},
    {userId:3,firstName:"Ajay",gender:"male"}
]

const NameofUsers = users.map(function(user){
    return user.firstName;
})
console.log(NameofUsers);