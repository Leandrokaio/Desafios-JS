// Crie uma função que gera um array de números aleatórios. A função recebe como argumento: tamanho do array, valor mínimo e valor máximo dos números.

//Função que ordena os números na lista
function sortfunction (a, b){
    return (a - b);
}

function numberValidator (lengthArray, minValue, maxValue){
    lengthArray = Number(lengthArray);
    minValue = Number(minValue);
    maxValue = Number(maxValue);

    //Validação que impede letras, strings vazias ou valores inválidos
    if(isNaN(lengthArray) || isNaN(minValue) || isNaN(maxValue)){
        return ("Todos os valores devem ser número");
    }
    
    //Valida se o tamanho da lista é um número inteiro positivo
    if(lengthArray <= 0 || !Number.isInteger(lengthArray)){
        return ("O tamanho do array deve ser um númeo inteiro positivo");
    }

    //Valida min < max
    if(minValue >= maxValue){
        return ("O valor mínimo deve ser menor que o valor máximo");
    }

    //Caso passe de todas as validações
    return randomArray(lengthArray, minValue, maxValue);

}

function randomArray (lengthArray, minValue, maxValue){
    let array = [];
    for(let i = 0; i < lengthArray; i++){
        let minMax = parseInt(Math.random() * (maxValue - minValue) + minValue)
        array.push(minMax);
        array.sort(sortfunction)
    }
    return array;
}

const array1 = numberValidator(5, 1, 20);
console.log(array1);

