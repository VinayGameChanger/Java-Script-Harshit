//reduce method in array
//it also take input as callback function or function
//it return 
const numbers=[1,5,3,4,5];

//aim: sum of all the number

const sum =numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});
console.log(sum);

//accumulator   currentValue    return
//1               5              6
//6               3              9
//9               4              13
//13              5              18