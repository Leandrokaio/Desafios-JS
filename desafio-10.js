
// Crie uma função que recebe um valor N como argumento e verifica se é par ou ímpar. Imprima o resultado na tela.

const verificaNumeroParImpar = (numero) =>{
    if(numero % 2 === 0){
        let resultado = `O número ${numero} que você digitou é PAR! `
        console.log(resultado);
    }else{
        resultado = `O número ${numero} que você digitou é ÍMPAR! `
        console.log(resultado)
    }
}
const numero = 15;
verificaNumeroParImpar(numero)

