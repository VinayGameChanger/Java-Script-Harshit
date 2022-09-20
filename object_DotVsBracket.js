//Different between Dot vs Bracket notation
const key= "email";
const human={
    name:"vinay",
    age:26,
    "person hobbies":["manga","pubg","youtube"]
}

//access person hobbies through dot notation
//is not possible due to space
// console.log(human.person hobbies); error

//bracket notataion only be used
console.log(human["person hobbies"]);


//we cannot use dot notation in this case also
human[key]="vinay@gmail.com";
console.log(human);