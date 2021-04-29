
const isVisible = "is-visible";

document.getElementById("btnOtraCuenta3").addEventListener("click", function() {
    document.getElementById("modal4").classList.add(isVisible);
});

document.getElementById("modalClose3").addEventListener("click", function() {
     document.querySelector(".modal-cuenta.is-visible").classList.remove(isVisible);
});

document.getElementById("backRegistro").addEventListener("click", function() {
    window.history.back()
});

document.getElementById("btnEye2").addEventListener("click", ()=>{
    let a=document.querySelector("#registroPass");
    let b=document.querySelector("#eye2");
    if (a.type=="password")  {
    a.type="text";
    b.src="../img/eye-visibility.png";
    }
    else {
    a.type="password";
    b.src="../img/eye-visibility-off.png";
    } 
});
