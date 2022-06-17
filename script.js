const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const botao = document.getElementById("button-enviar");


botao.addEventListener("click", function() {
    return mostrarResultado();
})

function mostrarResultado() {
    let valorPeso = peso.value;
    let valorAltura = altura.value;

    const imc = valorPeso/(valorAltura**2);
    
    document.getElementById("resultado").innerHTML = `
        <p class="resultado-imc">O seu IMC é: ${imc.toFixed(1)}</p>
    `;
}