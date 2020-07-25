var lst=document.getElementById("list")


function add(){
    var val=document.getElementById("value")
    if (val.value==""){
        
        return;
    }
    //create add item
    var l=document.createElement("p");
    var txt=document.createTextNode(val.value);
    l.setAttribute("class","para");
    l.appendChild(txt);
    //del button
    var del=document.createElement("button");
    var t1=document.createTextNode("Delete");
    del.setAttribute("class","btn");
    del.setAttribute("onclick","Del(this)");
    del.appendChild(t1);

    //edit button
    var edit=document.createElement("button");
    var t2=document.createTextNode("Edit");
    edit.setAttribute("class","btn")
    edit.setAttribute("onclick","Edit(this)");
    edit.appendChild(t2);

    l.appendChild(edit);
    l.appendChild(del);
    lst.appendChild(l);
    document.getElementById("value").value=""

}
function Del(e){
    e.parentNode.remove();

}

function Edit(e){
    var val=prompt("enter your updated value");
    if (val==""){
        return ;
    }
    e.parentNode.firstChild.nodeValue=val;
    
}
function dele(){
    list.innerHTML=""
}