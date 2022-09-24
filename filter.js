//filter method in array
//it also return Array
//it also take input as callback function
//filter callback must return boolean value True or False
const numbers = [1,4,71,8,232];

const isEven=(number)=>{
    return number%2===0;
    
}
const evenNo = numbers.filter(isEven);
console.log(evenNo);