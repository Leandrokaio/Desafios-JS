/**
 * Classe Atleta
 * * Implementa a lógica para armazenar dados de um atleta,
 * calcular sua categoria, IMC e média válida das notas.
 */
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        const notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        const notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

        const somaNotas = notasValidas.reduce((acumulador, nota) => acumulador + nota, 0);

        if (notasValidas.length > 0) {
            return somaNotas / notasValidas.length;
        } else {
            // Retorna 0 se não houver notas válidas (ex: se o array original tiver 0, 1 ou 2 notas)
            return 0; 
        }
    }


    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        // Retorna as notas como uma string formatada (separadas por vírgula e espaço)
        return this.notas.join(", "); 
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}


// Declara o atleta
const atleta = new Atleta(
    "Cesar Abascal",
    30, 
    80, 
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

// Exibe as informações e cálculos no console
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());

console.log("Média válida: " + atleta.obtemMediaValida());

