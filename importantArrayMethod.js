//important array method
//forEach
// const numbers=[1,2,3,4,6,9];


//print index and number of an array( Method 1)
// function myFunc(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// }
// for(let i=0;i<numbers.length;i++){
//     myFunc(numbers[i],i);
// }

//print index and number of an array( Method 2 foreach)

//foreach pass two arugument first is number and 2nd one is index 
// numbers.forEach(myFunc)

// example 2 take number from array and multiply by 2

// numbers.forEach(function(number){
//     console.log(number*2);
// })

//example 3 Print first name from each object

const users=[
    {firstName:"Vinay",age:26},
    {firstName:"Ajay",age:25},
    {firstName:"Sunny",age:26}
]
//using forEach
users.forEach(function(user,index){
    console.log(user.firstName);})

//using for of loop
for(let user of users){
    console.log(user.firstName);
}
