//a
let add=(value =100)=>{
    return value;
};
console.log(add());


//b
function userFriends(username, ...names){
    console.log(username);
    for(let i in names){
        console.log(names[i]);
    }
    //console.log(names);
}
userFriends("Nishant","Rajesh","subhash","Rohit");


//c
let printCapitalNames=(...capnames)=>{
    let arr=[];
    for(i in capnames){
        arr.push(capnames[i].toUpperCase());
    }
    return arr;
}
let a =printCapitalNames("hyderabad","mumbai","bangalore","chennai","delhi");
console.log(...a);

