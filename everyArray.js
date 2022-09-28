//every method
const numbers=[2,6,8,10];

const isEven =numbers.every((number)=>{
    return number%2===0;
})
console.log(isEven); //return true because every element is even

// callback function return--> true/false (booleans)
//every method return -------> true/false(booleans)