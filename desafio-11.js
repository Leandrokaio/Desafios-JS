
// Crie uma função que retorne o fatorial de um número, passado como parâmetro. Imprima o resultado na tela.

const calculaFatorial = (numero) =>{
    let resultado = numero
    
    for(let i = numero - 1; i > 0; i--){
        resultado *= i;
    }

    if(numero === 0){
        console.log("O fatorial do número 0 é 1");
    }else if (numero < 0){
        console.log("Não existe fatorial de número negativo")
    }else{
        console.log(`O fatorial do numero ${numero} é ${resultado} `)
    }

}
const numero = 5;
calculaFatorial(numero);