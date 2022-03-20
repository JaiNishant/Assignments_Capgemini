let hello = 100;
if(hello = 100){
    let number =200;
    console.log(`The value declared for variable number inside the IF condition is ${number} .`);
}

try {
    console.log(number);
} catch (error) {
    console.log(error+". there is not variable declared.");
}