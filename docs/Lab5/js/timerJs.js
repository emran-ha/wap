function date(){
    let nowM =  new Date();
    let text = nowM.toLocaleDateString();
    console.log(text);
    let month = nowM.getMonth();
    month = month + 1;
    const currTime = nowM.getFullYear() + "-" + month + "-" + nowM.getDate() + " " + nowM.getHours() + ":" + nowM.getMinutes() +
    ":" + nowM.getSeconds();
    document.getElementById("mytime").innerHTML = currTime;
    console.log(currTime);
}
let timer = null;
function msg(){
    if(timer === null){
        timer = setInterval(date, 1000);
    }else{
        clearInterval(timer);
        timer = null;
    }
    
}
console.log("testing")
window.addEventListener('load', msg);
