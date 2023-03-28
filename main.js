const form = document.querySelector("form");
let valorEMaior = false;

function validaCampos(campoA, campoB) {
    return Number.parseInt(campoA) < Number.parseInt(campoB);
}
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const campoA = document.querySelector("#CampoA");
    const campoB = document.querySelector("#CampoB");

    const errorMessage = `Campo B (Valor: ${campoB.value}) deve ser maior que Campo B (Valor: ${campoA.value})`;
    const successMessage = `Campo A (Valor: ${campoA.value}) é menor que Campo B (Valor: ${campoB.value})`;


    const campoMessageA = document.querySelector("p[campoA]");
    const campoMessageB = document.querySelector("p[campoB]");
    valorEMaior = validaCampos(campoA.value, campoB.value);
    if (valorEMaior) {
        campoA.classList.add("campoStyleSuccess");
        campoB.classList.add("campoStyleSuccess");
        campoMessageA.innerHTML = successMessage;
        campoMessageA.classList.add("success-message");
        campoMessageB.classList.remove("error-message");
    } else {
        campoA.classList.remove("campoStyleSuccess");
        campoB.classList.remove("campoStyleSuccess");
        campoA.classList.add("campoStyleError");
        campoB.classList.add("campoStyleError");
        campoMessageB.innerHTML = errorMessage;
        campoMessageB.classList.add("error-message");
        campoMessageA.classList.remove("success-message");
    }
})