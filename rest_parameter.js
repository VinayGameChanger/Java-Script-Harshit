//rest parameter
// it gives an array for all the extra argument entered


// function myFunc(a,b,...c)
// {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`)
// }

// myFunc(4,5,9,44,88)

function  addition(...a){
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    return console.log(sum);
}
addition(4,5,8,40,10,155,8);