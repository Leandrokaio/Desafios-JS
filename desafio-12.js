/*
Crie uma função que recebe uma string e retorna a quantidade de vogais no texto recebido. Imprima o resultado na tela.
*/

const contaVogais = (string) => {
    let quantidadeVogais = 0;
    let textoMinusculo = string.toLowerCase().trim();

    //Uso do For padrão
    for(let i = 0; i < textoMinusculo.length; i++){
        const caractere = textoMinusculo[i];
        if("aeiou".includes(caractere)){
            quantidadeVogais++;
        }
    }
    return quantidadeVogais;
}

const contaVogais2 = (string) =>{
    let quantidadeVogais = 0;
    let textoMinusculo = string.toLowerCase().trim();
    //Uso do For Of 
    for(const caractere of textoMinusculo){
        if ("aeiou".includes(caractere)){
            quantidadeVogais++;
        }
    }
    return quantidadeVogais;
}

console.log(contaVogais("Palavraaaa feijao lucas"));
console.log(contaVogais2("Palavra"));