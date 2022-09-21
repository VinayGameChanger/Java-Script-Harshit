// //function is like a naukar it will work according to design you created

// //function decleration
// function singHappybirthday(){
//     console.log("happy birthday to you ......");
// }

// //function call

// singHappybirthday();

// //example

// //addition function
// function addition(a,b){ //paramter (a,b)
//     console.log(a+b);
// }
// addition(6,9); //argument (6,9)
// addition(4,8);

// //example make a function isEven

// function isEven(a){
//     return (a%2===0)
// }
// console.log(isEven(200));

// //example to print first character of a string
// function firstCharacter(a){
//     return a[0];
// }
// console.log(firstCharacter("Rajs"));

//example to find the index of target in a array
// array[1,4,6,8] target 4


function indexOfTarget(Array,Target){
    for(let i=0;i<Array.length;i++){
        if(Array[i]===Target){
            // console.log(Array.indexOf(Target)); my method
        return console.log(i);//harshit method
        } 
        
    }
    return console.log("not found");
    
}
indexOfTarget([1,5,7],11);
indexOfTarget([1,5,7],1);