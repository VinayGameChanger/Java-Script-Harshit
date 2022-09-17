let array1=["item1","item2"];
let array2=["item3","item4"];
let array3=array1.concat(array2);
console.log("array3 is",array3);

let array4 =array3.concat(["item5","item6"]);
console.log("array4 is",array4);

let array5=array3.concat(array3,array4);
console.log("array5 is",array5);


//concat using spread operator
let array6=[...array1,"item10","item11"];
console.log("array6 is",array6);

let array7=[...array1,...array2];
console.log("array7 is",array7);