var list = document.getElementById("list_items")
function add_item() {
    var todo_list = document.getElementById("todo_list");
    if (todo_list.value == "") {
        alert("Enter some text")
        
    }else{
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_list.value);
    li.appendChild(liText);
    list.appendChild(li);
    li.setAttribute("class" , "li")
    //Delete button 
    
    var deleteBtn = document.createElement("Button");
    var deleteText = document.createTextNode("Delete")
    deleteBtn.appendChild(deleteText);
    li.appendChild(deleteBtn)
    deleteBtn.setAttribute("onclick", "deleteItem(this)");
    deleteBtn.setAttribute("class","deletebtn")

    //Edit button
    var EditBtn = document.createElement("Button");
    var EditText = document.createTextNode("Edit")
    EditBtn.appendChild(EditText);
    li.appendChild(EditBtn)
    EditBtn.setAttribute("onclick", "EditItem(this)");
    EditBtn.setAttribute("class","editbtn")


todo_list.value = ""
}


}
function deleteItem(btn) {
    btn.parentNode.remove()
}
function deleteAll() {
    list.innerHTML = ""
}
function EditItem(btn) {
    var value = prompt("enter value" , btn.parentNode.firstChild.nodeValue );
    btn.parentNode.firstChild.nodeValue  = value 
   
}