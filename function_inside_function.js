//function inside function

const hello=()=>{
    const addition=(a,b)=>{
        console.log(a+b);
    }
    const Multiply=(a,b)=>{
        console.log(a*b);
    }
    console.log("Hello world");
    Multiply(5,5);
    addition(2,3);
}

hello();
    
