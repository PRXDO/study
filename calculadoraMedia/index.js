
function media() {

    // var num1 = document.getElementById('nota1').value;
    // var num2 = document.getElementById('nota2').value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var inputMedia = document.getElementById('media');
    // var noteF = +num1 + +num2;

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    console.log(nota1);
    console.log(nota2);
    console.log(nota3);
    console.log(nota4);
    console.log(inputMedia.value);

    inputMedia.value = media.toFixed(2);

}

