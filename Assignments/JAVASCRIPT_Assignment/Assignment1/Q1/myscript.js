function sum(y){
    var news = 0;
    for(var x=1;x<=y;x++){
        news += x;
    }
     return news;
}

function result(){
    var z =document.getElementById("number").value;
    document.getElementById("res").innerHTML="sum of numbers is :"+sum(z);
}