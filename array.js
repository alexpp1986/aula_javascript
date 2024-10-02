const pessoas = ["alex", "nayara", "pedro", "isa"]
console.log(pessoas)
console.log(pessoas[0])
console.log(pessoas[1])
console.log(pessoas[2])
console.log(pessoas[3])
console.log(pessoas[4])
console.log(pessoas[5]) //quando não existr a posição ele retorna undefine
console.log(pessoas.length) //comando lenght mostra a quantidade posições dentro do comando.

pessoas.push("juvenal") //comando PUSH adiciona um elemento na ultima posicao
console.log(pessoas)

pessoas.unshift("piu") // comando UNSHIFT adiciona um elemento no inicio
console.log(pessoas)

pessoas.pop() // comando POP remove o ultimo elemento da posicao
console.log(pessoas)

pessoas.shift () // comando SHIFT remove o primeiro elemento da posicao
console.log(pessoas)


const varios =["CERVEJA", 100, "SEXTA FEIRA", "VALEU"]
console.log(varios)


//exercio: crie um array com varios numeros e calcule a media desses valores

const notas= [100,90,80,70,50]
const calcularMedia = (notas) => {
    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return soma / notas.length;
}
const media = calcularMedia(notas);
console.log(`media final: ${media}`);


//opção 2 para resolução do exercio

const notas2 = [100,50,80,30]
const calcularMedia2 = (notas2) => {
let soma = 0
for (let i =0; i< notas2.length; i++){
    soma += notas2[i]
}

return soma/ notas2.length
}

//crie um array com dez numeros, calcule e mostre a quantidade de numeros negativo e a soma dos numeros positivos desse array

let numeros = [10,2,3,4,5,-6,-7,8,9,22]
let negativo = 0;
let somarpositivo = 0;

for (let i =0; i< numeros.length; i++) {
    if (numeros[i] < 0) {
        negativo++;
    } else if (numeros [i] > 0) {
   somarpositivo += numeros[i];

    }
}

console.log ("quantidade de negativos:" + negativo);
console.log ("soma do numeros positivos:" +somarpositivo);

//crie um array de 10 elementos, e utilize um FOR para buscar a posição de um valor dentro do array

let elementos = ["segunda", 10, "domingo", 11,16,20,30,40,50,]
let valorprocurado = 12;
let posicao = -1;

for (let i=0; i<elementos.length; i++){
    if (elementos[i] === valorprocurado){
        posicao= i; break;

    }
}

if (posicao !== -1) {
    console.log("o valor " + valorprocurado + " esta na posição " + posicao);

}else {
    console.log("o valor "  +  valorprocurado + " não consta no array. ");

}


