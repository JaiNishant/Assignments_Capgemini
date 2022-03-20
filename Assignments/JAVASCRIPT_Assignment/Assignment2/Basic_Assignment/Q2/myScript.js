function square(x){
    return x*x;
}
function double(x){
    return x*2;
}

var f1 = function compose(v){
    return square(double(v));
}
var f2 = function compose(v){
    return double(square(v));
}

document.write(f1(5)+"<br>");
document.write(f2(5));
