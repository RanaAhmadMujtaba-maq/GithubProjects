



function myfunction(){
    var inp =  document.getElementById("my-input").value;
    console.log(inp);

    var out = document.getElementById("d1").innerHTML=inp;
    console.log(out);

    var ele = document.createElement("li");
    var txt = document.createTextNode(inp);
    ele.appendChild(txt);
    var parent = document.getElementById("list");
    parent.appendChild(ele);
}

