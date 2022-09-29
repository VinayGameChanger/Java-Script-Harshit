//splice method
//start,delete,insert

const myArray=['item1','item2','item3'];

//delete also return
// const deletedItem=myArray.splice(1,1);//enter start from where you want to delete and 2nd write no of item you want to delete
//                                       //leave 3rd empty if you don't want to insert
// console.log('deletedItem',deletedItem);


//insert
// myArray.splice(1,0,'item X');


//insert and delete
myArray.splice(1,2,'itemX','itemY');
console.log(myArray);