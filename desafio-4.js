/*
Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.

A competição em questão possui a seguinte regra de avaliação:

Cada jurado pode fornecer uma nota de um (1) a dez (10);
A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.

*/

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function calcularMediaValidas(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let atleta = atletas[i];
        let notas = atleta.notas.slice();
        notas.sort((a, b) => a - b);

        let notasValidas = notas.slice(1, 4);
        let soma = notasValidas.reduce((ac, val) => ac + val, 0);
        let media = soma / notasValidas.length;

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notasValidas.join(", ")}`);
        console.log(`Média Válida: ${media}`);
        console.log(""); 
    }
}

calcularMediaValidas(atletas);