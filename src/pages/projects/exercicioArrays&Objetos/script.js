function inverterString() {
    var input = document.getElementById("texto");
    var texto = input.value;

    var caracteres = texto.split('');
            caracteres.reverse();
            var stringInvertida = caracteres.join('');

            document.getElementById("output").innerHTML = ("Resultado invertido: " + stringInvertida);
            output.classList.add("output");

}