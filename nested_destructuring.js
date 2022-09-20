//nested destructuring
const employees=[
    {employeesId: 1,name:"vinay",gender:"male"},
    {employeesId: 2,name:"ajay",gender:"male"},
    {employeesId: 3,name:"sunny",gender:"male"}
]
const[human1,human2,human3]=employees;
console.log(human1,human2,human3);
console.log(typeof human1);

//if we want to destructure from the object then use {}
let [{name:user1firstName,employeesId:user1id},,{gender:user3Gender}]=employees;
console.log(user1firstName,user3Gender,user1id);