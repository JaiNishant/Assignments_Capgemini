
function isEven(num) { return(num%2 == 0); }

function find(a,fun){
    for(i=0;i<a.length;i++){
        if(fun(a[i])){
            return a[i];
        }
        else{
            continue;
        }
    }
}
var arr=[1,2,3,4,5];
document.write("The first even number in array : "+find(arr,isEven));
