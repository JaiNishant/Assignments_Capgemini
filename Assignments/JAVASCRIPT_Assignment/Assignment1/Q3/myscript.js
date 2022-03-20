function sum(y){
    var n = 0;
    var arr = [];
    while(n<=20){
        y++;
        if((y%400==0)||((y%4==0)&&(y%100!=0))){
            arr[n]=y;
            //arr.push(y);
            n++;
        }
    }
    return arr;
}

function result(){
    var z =document.getElementById("number").value;
    document.getElementById("res").innerHTML="Next 20 Leap Years :"+sum(z);
}