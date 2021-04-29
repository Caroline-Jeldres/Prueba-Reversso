
const isVisible = "is-visible";

document.getElementById("btnOtraCuenta").addEventListener("click", function() {
    document.getElementById("modal2").classList.add(isVisible);
})

document.getElementById("modalClose").addEventListener("click", function() {
     document.querySelector(".modal-cuenta.is-visible").classList.remove(isVisible);
})