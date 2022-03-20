function square(x){
    return x*x;
}

var list=[];
function find(a,fun){
    if(a.length == 0){
        return;
    }
    list.push(fun(a.slice(0,1)));
    a = a.slice(1,(a.length));
    find(a,fun);
    return list;
}


var list1=[];
function find1(a){
    if(a.length==0){
        return;
    }
    list1.push(Math.sqrt(a.slice(0,1)));
    a=a.slice(1,(a.length));
    find1(a);
    return list1;
}

var arr=[1,2,3,4,5];
document.write("square of array : "+find(arr,square)+"<br>");
document.write("squareroot of array : "+find1(list));