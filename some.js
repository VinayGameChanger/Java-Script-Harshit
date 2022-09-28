//some method

const numbers=[2,5,8,9,71];

//if some number are even than it return true

const ans=numbers.some((number)=>number%2===0);
console.log(ans);

//real life example
const userCart=[
    {productId:1,productName:"mobile",price:10000},
    {productId:2,productName:"shoes",price:150},
    {productId:3,productName:"tv",price:6000},
    {productId:3,productName:"car",price:600000}
]
//check if any product price is greater than 1lakh

const notAffordable=userCart.some((product)=>product.price>100000);
console.log(notAffordable);