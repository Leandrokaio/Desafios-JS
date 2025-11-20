// Crie uma função que gera um array de números aleatórios. A função recebe como argumento: tamanho do array, valor mínimo e valor máximo dos números.

//Função que ordena os números na lista
function sortfunction (a, b){
    return (a - b);
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

