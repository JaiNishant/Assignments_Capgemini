function square(x){
    return x*x;
}

function find(a,fun){
    var list=[];
    for(i=0;i<a.length;i++){
        
        list.push(square(a[i]));
    }
    return list;
}

function find1(a){
    var list=[];
    for(i=0;i<a.length;i++){
        
        list.push(Math.sqrt(a[i]));
    }
    return list;
}

var arr=[1,2,3,4,5];
document.write("square of array : "+find(arr,square)+"<br>");
document.write("squareroot of array : "+find1(find(arr,square)));