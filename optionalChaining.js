//optional chaining

const userInfo={
    name:"vinay",
    address:{houseNo:75,Block:"C"}
}

//without ?
console.log(userInfo.name);
console.log(userInfo.address.houseNo);

//with ? it check if property exist then continue otherwise undefined
console.log(userInfo?.name);
console.log(userInfo?.address?.houseNo);
