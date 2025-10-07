// Codigo para conversão de temperaturas 

function celsiusFahrenheit(temperatura){
    let temperaturaConvertida = (temperatura * 1.8) + 32;
    console.log(temperaturaConvertida);
}

celsiusFahrenheit(50)

function fahrenheitCelsius(temperatura){
    let temperaturaConvertida = (temperatura - 32) * 0.5;
    console.log(temperaturaConvertida);
}

fahrenheitCelsius(80);


// Conversão de uma matriz de temperaturas

function converteTemperaturaEmFahrenheit(temperaturas){
    let temperaturaConvertida = temperaturas.map(function(temperatura){
        let calculo = (temperatura * 1.8) + 32;
        return calculo;
    })
    return temperaturaConvertida;
}

function converteTemperaturaEmCelsius(temperaturas){
    let temperaturaConvertida = temperaturas.map(function(temperatura){
        let calculo = (temperatura - 32) * 0.5;
        return calculo;
    })
    return temperaturaConvertida;
}

//Testando as funções

let matrizDeTemperaturasEmCelsius = converteTemperaturaEmCelsius([32,82,94,15]);
console.log(matrizDeTemperaturasEmCelsius)
let matrizDeTemperaturas = converteTemperaturaEmFahrenheit([50,60,82,93]);
console.log(matrizDeTemperaturas)
