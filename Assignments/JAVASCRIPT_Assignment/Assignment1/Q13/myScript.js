var arr = [1,2,3,4,5,6];

function arra(a){
    var b = 0;
    for(i=0;i<(a.length);i++){
        b=b+a[i];
    }
    
    return b;
}
function arr2(a){
    var b=0;
    var i=0;
    while(i<(a.length)){
        b=b+a[i];
        i++;
    }
    return b;
}
function arr3(a){
    var b=0;
    var i=0;
    do{
        b+=a[i];
        i++;
    }
    while(i<(a.length));
    return b;
}

document.write("Sum using for Loop :"+arra(arr));
document.write("<br>Sum using while Loop :"+arr2(arr));
document.write("<br> Sum using do-while Loop :"+arr3(arr));