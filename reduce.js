//reduce method in array it only work on array
//it also take input as callback function or function
//it return 
// const numbers=[1,5,3,4,5];

// //aim: sum of all the number 

// const sum =numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },100);//here 100 is initial value of 100 we can also pass initial vallue of accumulator and currentValue will 
//          be 1 as per array
// console.log(sum);

//accumulator   currentValue    return
//1               5              6
//6               3              9
//9               4              13
//13              5              18

const userCart=[
    {productId:1,productName:"mobile",Price:5000},
    {productId:2,productName:"shoes",Price:2000},
    {productId:3,productName:"Shirt",Price:500}
]

let totalPay=userCart.reduce((totalPrice,currentproduct)=>{
    return currentproduct.Price+totalPrice ;
},0)// here we pass  initial value of accumulator or totalPrice as 0
console.log(totalPay);