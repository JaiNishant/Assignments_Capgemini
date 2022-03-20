
class rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }    
}

var r1 = new rectangle(15,10)
document.write("Width of rectangle R1: "+r1.width+" --- Height of rectangle R1:"+r1.height+"<br>");
r1.height=100;
document.write("Width of rectangle R1: "+r1.width+" --- Modified Height of rectangle R1:"+r1.height+"<br>"+"<br>");

var r2 = new rectangle(15,10)
document.write("Width of rectangle R2: "+r2.width+" --- Height of rectangle R2:"+r2.height+"<br>");
r2.width=50;
document.write("ModifiedWidth of rectangle R2: "+r2.width+" --- Height of rectangle R2:"+r2.height+"<br>");
