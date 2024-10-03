
function calcularMedia(nota1, nota2, nota3) {
 
    let media = (nota1 + nota2 + nota3) / 3;

    if (media >=6) {
        console.log("Aprovado! Sua média foi: " + media.toFixed(2));
    } else {
        console.log("Reprovado")
    }
}

calcularMedia(7, 5, 6);
