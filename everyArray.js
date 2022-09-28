//every method
// const numbers=[2,6,8,10];

// const isEven =numbers.every((number)=>{
//     return number%2===0;
// })
// console.log(isEven); //return true because every element is even

// callback function return--> true/false (booleans)
//every method return -------> true/false(booleans)


//real life example
const userCart=[
    {productId:1,productName:"mobile",price:10000},
    {productId:2,productName:"shoes",price:150},
    {productId:3,productName:"tv",price:6000},
]

//check every product price<20000
const affordable=userCart.every((product)=>{
    return product.price<20000;
})
console.log(affordable);