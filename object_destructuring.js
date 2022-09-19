const band={
    name:"BlackPink",
    famousSong:"how you like that",
    members:4,
    memberName:["Lisa","Jisoo","Rose","Jennie"]
}
console.log(band);


// let{name,famousSong,members}=band;
// console.log(name,famousSong,members);

//if you want to save variable with different name
//use : followed by variable name

let{name:var1,famousSong:var2, ...restobj}=band;
console.log(var1,var2);
console.log(restobj);//created sub object