//it does not give a new array sort changes the original array


// const numbers=[1200,3000,400,5,9];
// numbers.sort();

// console.log(numbers);

//expected result [5,9,400,1200,3000]
//actual result [1200,3000,400,5,9] what the hell? because
//javascript sort as a string

/*[1200,3000,400,5,9]
  1      3    4   5   9  js take first string from each no
  49     51   52   53  57  and arrange them increasing order of ascii code
  [1200,3000,400,5,9] thats why actual output


  sorting method works good for strings
*/
const userNames=["bablu","aman","vinay","sunny","ajay"];
userNames.sort();
console.log(userNames);


const numbers=[1200,3000,400,5,9];

// Now what to do to sort the number

// numbers.sort((a,b)=>{
//     return a-b;
// })
// console.log(numbers);

/* 
   a-b---> positive than b,a
   a-b ---> negative than a,b
  1200,400
  a-b=700 than (400,1200)
  5,9
  a-b=-4 than (5,9)*/


//   if you want to arrange in descending order than b-a
  numbers.sort((a,b)=>{
    return b-a;
})
console.log(numbers);

//real life problem in flipkart price low to high

const products=[
    {productid:1,prodctName:"p1",price:300},
    {productid:2,prodctName:"p2",price:3000},
    {productid:3,prodctName:"p3",price:500},
    {productid:4,prodctName:"p4",price:340},
    {productid:5,prodctName:"p5",price:5500},
    {productid:6,prodctName:"p6",price:30880}
]
//low to high
// products.sort((a,b)=>{
//     return (a.price)-(b.price);
// })
// console.log(products);

//but sort change the originial array to avoid this use clone
const lowTohigh=products.slice(0).sort((a,b)=>{
    return (a.price)-(b.price);
})
console.log(lowTohigh);
