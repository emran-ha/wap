



window.onload = function(){

    
    function printFormatData(event){
        event.preventDefault();
        const emai = document.getElementById("emid");
        const pass = document.getElementById("pwd");
        console.log(emai.value);
        console.log(pass.value);
        emai.value="";
        pass.value="";
    } 
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", printFormatData);

    const val = document.getElementById("comment");
    val.addEventListener("click", changColor());
    function changColor(){
        val.style.color = 'red';
    }
}