

window.onload = function(event){
    let myForm = this.document.getElementById("myform");
    myForm.addEventListener("submit", event =>{
        event.preventDefault();
        const fname = document.getElementById("fname");
        const cid = document.getElementById("cid");
        const ssn = document.getElementById("ssn");
        const state = document.getElementById("state");
        const radiobtn = myForm.elements["seniorbtn"];
        alert(`
            Full Name: ${fname.value}
            Citizen ID: ${cid.value}
            SSN: ${ssn.value}
            State: ${state.value}
            Senion Citizen ? ${radiobtn.value}
        `);
        fname.value = "";
        cid.value = "";
        ssn.value = "";
        state.value = "";
        var ele = document.getElementsByName("seniorbtn");
        for(var i=0;i<radiobtn.length;i++)
            ele[i].checked = false;
    });
}