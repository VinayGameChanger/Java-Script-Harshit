//find method in array
// const myArray=["vinay","sunny","ajay","raju","raj"];

// const isLength3=myArray.find((string)=>{
//     return string.length===3;
    
// })
// console.log(isLength3);

//Real life example

//we need to find user whose userId is 3

const users=[
    {userId:1,userName:"vinay"},
    {userId:2,userName:"ajay"},
    {userId:3,userName:"sunny"},
    {userId:4,userName:"raj"}
]
const result= users.find((user)=>{
    return user.userId===3;
})
console.log(result);