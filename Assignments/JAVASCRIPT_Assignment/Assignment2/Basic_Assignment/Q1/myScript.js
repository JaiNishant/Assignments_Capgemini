function square(x){
    return (x*x);
}
function double (x){
    return(x*2);
}
function composedValue(s,d,v){
    return(s(d(v)));
}

document.write(composedValue(square,double,5));