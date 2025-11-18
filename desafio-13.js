/*
Crie uma função que recebe uma string e retorna a quantidade de consoantes no texto recebido. Imprima o resultado na tela.
*/

const contaConsoantes = (string) => {
    const texto = string.toLowerCase().replace(/\s+/g, '');
    let contador = 0;

    for (const caractere of texto) {
        if (/[bcdfghjklmnpqrstvwxyz]/.test(caractere)) {
            contador++;
        }
    }

    return contador;
};

const palavra = "palavra ab";
console.log(contaConsoantes(palavra))