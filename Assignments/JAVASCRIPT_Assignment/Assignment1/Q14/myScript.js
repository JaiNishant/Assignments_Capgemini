var rand=[];


function f1(b){
    for(i =0; i<100;i++){
        b[i]=Math.floor(Math.random()*1000)+1;
    }
    return b;
}

//document.write(f1(rand));

function largestof100(c){
    var l=c[0];
    for(i=0;i<=c.length;i++){
        if(l<c[i]){
            l=c[i];
        }
    }
    return l;
}
document.write("<br>Largest of Random 100 numbers : "+largestof100(f1(rand)));


function Smallestof100(c){
    var l=c[0];
    for(i=0;i<=c.length;i++){
       if(Math.min(l,c[i])){
        l=c[i];
       }
       
    }
    return l;
}
document.write("<br>smallest of Random 100 numbers : "+Smallestof100(f1(rand)));


function sum(arr){
    var sum =0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

document.write("<br>Sum of Random 100 numbers : "+sum(f1(rand)));


function ave(arr){
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    var res=sum/i;
    return res;
}
document.write("<br>Average of Random 100 numbers : "+ave(f1(rand)));



function evenOrOdd(arr){
    var oddCount = 0;
    var evenCount = 0
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i]%2===0){
            evenCount++;
        }else{
            oddCount++;
        }  
    }

    var str = "Even Count " + evenCount + "<br>Odd Count " + oddCount;
    return str;
}

document.write("<br>smallest of Random 100 numbers : "+evenOrOdd(f1(rand)));