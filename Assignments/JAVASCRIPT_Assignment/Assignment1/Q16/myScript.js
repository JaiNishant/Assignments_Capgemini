function createTable(){
    var rn = document.getElementById("row").value;
    var cn = document.getElementById("columns").value;


    for(i=0;i<rn;i++){
        var x = document.getElementById("tables").insertRow(i);
        for(j=0;j<cn;j++){
            var y = x.insertCell(j);
            y.innerHTML="Row-"+(i+1)+"Column-"+(j+1);
        }
    }
}