function changeTextareaLog(el, textarea){
    el.innerHTML = 37 - textarea.value.length + " symbols left.";
}

function border(el){
    document.getElementById("selected").id = "";
    el.id = "selected";
}