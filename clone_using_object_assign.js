const obj={
    key1:"value1",
    key2:"value2"
}

const obj2={...obj};  // first method using spread operator
const obj3=Object.assign({},obj); // second method using object assign
obj.key3="value3";
console.log(obj);
console.log(obj2);
console.log(obj3);