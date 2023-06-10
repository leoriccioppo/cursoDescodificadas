function calcularMaior() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);

    var maior = Math.max(numero1, numero2, numero3);

    alert("O maior número é: " + maior);
};

function verificarIdade() {
    var idade = parseInt(document.getElementById("idade").value);

    if (idade >= 18) {
        alert("Maior de idade");
    }
    else {
        alert("Menor de idade");
    }
};


function encontrarSomaMultiplos(limite) {
    let soma = 0;

    for (let i = 1; i < limite; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }

    return soma;
  }

const limite = 1000;
const somaMultiplos = encontrarSomaMultiplos(limite);

document.addEventListener('DOMContentLoaded', function() {

const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "é: " + somaMultiplos;

});