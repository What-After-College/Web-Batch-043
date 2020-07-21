let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function createListElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

    function deleteListItem(){
        li.classList.add("delete");
    }

    let dbtn = document.createElement("button");
    dbtn.appendChild(document.createTextNode('X'));
    li.appendChild(dbtn);
    dbtn.addEventListener("click", deleteListItem);
}



function addListAfterClick(){
    if(input.value.length > 0){
        createListElement();
    }
}

function addListAfterKeyPress(){
    if(input.value.length > 0 && event.which === 13){
        createListElement();
    }
}


enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress)