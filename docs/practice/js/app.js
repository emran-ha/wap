let select = document.getElementById("selectNumber");
let options = ["red", "yellow", "black", "grey", "orange"];
let color;
for(let i = 0; i < options.length; i++) {
    let opt = options[i];
    color = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    
}
select.addEventListener("change", changeColor);
function changeColor(){
    let box = document.getElementById("box");
    console.log(box);
    box.style.backgroundColor = color;
}