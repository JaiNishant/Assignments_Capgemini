var content=["Hello","World","in","a","frame"];
var lengt = content.length;
var star= "*";

function rectangle(a){
    document.write(star.repeat(lengt+4));
    for(i=0;i<lengt;i++){
        document.write("<br>*"+content[i]+"*");
    }
    document.write("<br>"+star.repeat(lengt+4));
}
rectangle(content);