// object are reference type
// arrays are good but not sufficient
// for real world data
// object store key value pair
// object don't have index like arrays


//how to create objects
const human={
    name:"vinay",
    age:26,
    hobbies:["manga","pubg","youtube"]
}
console.log(human);

// access data or property from objects

console.log(human.name); // dot notation
console.log(human["name"]);// bracket notation use "" for accesing property

//how to add more property or key value pair in object
human.gender="male"; //using dot notation
human["working"]="not";// using bracket notation
console.log(human);