const inicioNamoro = new Date(2026, 1, 24, 0, 0, 0);

function atualizarContador() {
    const agora = new Date();

    const diferenca = agora - inicioNamoro;

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContador();

setInterval(atualizarContador, 1000);

// ===== CARTA SECRETA =====

const botaoCarta = document.getElementById("botaoCarta");
const cartaSecreta = document.getElementById("cartaSecreta");

botaoCarta.addEventListener("click", function() {

    if (cartaSecreta.style.display === "none" || cartaSecreta.style.display === "") {

        cartaSecreta.style.display = "block";
        botaoCarta.textContent = "fechar cartinha ♡";

    } else {

        cartaSecreta.style.display = "none";
        botaoCarta.textContent = "Bryan, clique aqui ♡";

    }

});