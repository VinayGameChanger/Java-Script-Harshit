//sets (it is also a iterable like array or string)
//syntax
//store data like array or string
// in set duplicate are not allowed or unique item only
// no index based access like set[2] //error
//no index means no order
// const numbers=new Set([1,2,3,3]);//only one 3 come in result
// console.log(numbers);

// const strings=new Set("abcdef");
// console.log(strings);

// const newSet=new Set(); //empty set
// console.log(newSet);

//adding element in set
// newSet.add(1);
// newSet.add(2);
// newSet.add(3);
// newSet.add(4);
// newSet.add(5);
// newSet.add(6);//only one time 2 will be added because unique value allowed in set
// console.log(newSet);

//we can add different datatype in set\
//add array in set
// const myArray=["item1","item2"];
// newSet.add(myArray);
// console.log(newSet);

//to check if a particular element present in a set
//using has()
// console.log(newSet.has(1)); 
// console.log(newSet.has(7)); 

//sets are iterable than for of loop we can apply
// for(let item of newSet){
//     console.log(item);
// }


//sets can only be used when we know unique value we have to add ex:-Ids,roll no

// const ids=new Set();
// console.log(ids);

//trick to get unique element from an array
const newArray=[1,2,2,4,5,5,5];
const uniqueElement=new Set(newArray);
console.log(uniqueElement);

//how to find length of a set
let length=0;
for(let element of uniqueElement){
    length++;
}
console.log(length);