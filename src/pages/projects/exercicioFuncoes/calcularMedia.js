  function calcularMedia() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);

    var media = (numero1 + numero2 + numero3) / 3;

    document.getElementById("resultado").innerHTML = "A média dos números é: " + media;
  }