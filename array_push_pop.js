// array push pop(fast)
// array shift unshift(slow)
let fruits=["apple","mango","banana"];
fruits.push("strawberry");
console.log(fruits);
let poppedfruit=fruits.pop();
// console.log(fruits.pop());  //it also return the remove element
console.log(fruits);
console.log(poppedfruit);


// unshift=add element at start
fruits.unshift("orange");
console.log(fruits);

//shift=remove elements at start also return variable
let removedFruit=fruits.shift();
console.log(removedFruit);