//template string
let age=22;
let firstName="Vinay";


// my name is Vinay and my age is 22
//1st method
let aboutMe="my name is "+firstName+" and my age is "+age;
console.log(aboutMe);
//2nd method(templatestring use backticks and dollar and curly bracket
aboutMe =`my name is ${firstName} and my age is ${age}`;
console.log(aboutMe);