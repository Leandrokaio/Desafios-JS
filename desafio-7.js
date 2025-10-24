// Faça uma calculadora básica, que recebe dois números e a operação entre eles, e retorne o resultado

const calculadora = (num1, num2, operacao) =>{
    switch(operacao){
        case "soma":
            return "O resultado da soma é " + (num1 + num2) 
            break;
        case "subtracao":
            return "O resultado da subtração é " + (num1 - num2);
            break;
        case "multiplicacao":
            return "O resultado da multiplicação é " + (num1 * num2);
            break;
        case "divisao":
            return "O resultado da divisão é " + (num1 / num2);
            break;
        default:
            return "Escolha dois números e uma operação"
    }
}

const soma = calculadora(5, 6, "soma");
console.log(soma);

const subtracao = calculadora(10, 5, "subtracao")
console.log(subtracao);

const multiplicacao = calculadora(15, 7, "multiplicacao");
console.log(multiplicacao);

const divisao = calculadora(18, 4, "divisao");
console.log(divisao);

const testeMensagemDefault = calculadora(5, 6)
console.log(testeMensagemDefault)
