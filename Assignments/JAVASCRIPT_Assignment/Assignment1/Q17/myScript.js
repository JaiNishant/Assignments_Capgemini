var a =[1,2,3,4,5,6]
function rotate(arr,n){ 
    var c =0;
    for(i=1;i<=n;i++){
        for(j=0;j<(arr.length-1);j++){
            //var temp =arr[j];
            c=arr[j];
            arr[j]=a[j+1];
            a[j+1]=c;
        }
    }
    return arr;
}

document.write(rotate(a,2));