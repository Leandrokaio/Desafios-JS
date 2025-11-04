/*
    Desafio 11 - Tabuada
*/

const numero = 4;

const showMultiplicationTable = (numero) => {

    console.log(`Tabuada do número ${numero}:\n`);
    for(let i = 0; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`)
    }
}

showMultiplicationTable(numero);