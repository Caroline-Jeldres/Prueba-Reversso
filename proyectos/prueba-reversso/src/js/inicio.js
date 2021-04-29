
const isVisible = "is-visible";

document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('origen')
    if(product == 'registro'){
        document.getElementById("modal1").classList.add(isVisible);
    }

 }, false);

document.getElementById("btnOtraCuenta2").addEventListener("click", function() {
    document.getElementById("modal3").classList.add(isVisible);
})

document.getElementById("modalClose2").addEventListener("click", function() {
     document.querySelector(".modal-cuenta.is-visible").classList.remove(isVisible);
})
document.getElementById("backInicio").addEventListener("click", function() {
    window.history.back()
})
document.getElementById("btnEye").addEventListener("click", ()=>{
    let a=document.querySelector("#inicioPass");
    let b=document.querySelector("#eye");
    if (a.type=="password")  {
    a.type="text";
    b.src="../img/eye-visibility.png";
    }
    else {
    a.type="password";
    b.src="../img/eye-visibility-off.png";
    } 
});