//function returning function
function myFunc(){
    function innerFun(){
        return "Hello Vinay";
    }
    return innerFun;
}
const ans =myFunc();
console.log(ans());