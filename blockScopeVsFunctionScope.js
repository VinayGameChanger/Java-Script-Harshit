//Block Scope vs Function Scope

//Let and const are block{} Scope
// var is function scope // it can be access anywhere

{
    let myName="vinay";
   console.log(myName); 
}
// console.log(myName);//error because let is defined only in block not outside