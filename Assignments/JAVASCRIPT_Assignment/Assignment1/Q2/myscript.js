function sum(y){
    var news = 0;
    for(var x=0;x<=y;x++){

        if(x%3 ==0 || x%5==0){
            news += x;
        }
        
    }
     return news;
}

function result(){
    var z= document.getElementById("number").value;
    document.getElementById("res").innerHTML="sum of numbers"+sum(z);
}