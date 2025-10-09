//Criar um código para calcular o Índice de Massa Corporal, recebendo dados de altura e peso.

function calculaIMC(altura, peso){
    let resultadoIMC = parseInt(peso / altura **2); // Apenas o valor inteiro do resultado
    return resultadoIMC;
}

let nomeUsuario = "Kaio"
let imcUsuario = calculaIMC(1.80, 62);
let mensagemFinal = `${nomeUsuario} está com um IMC de ${imcUsuario}`
console.log(mensagemFinal);

