// Crie um programa que exibe o valor de uma tarifa dependendo da idade e tipo do usuário (estudante ou regular).

// O valor básico é R$10,50. Esse valor é alterado de acordo com a regra a seguir:

// Menores de 6 anos: grátis, tarifa zero;
// Estudantes: 50% de desconto;
// Idosos (60+): 30% de desconto;
// Regular: tarifa normal.


const calculaTaxa = (idade, userType, tarifa = 10.50) =>{
    switch(true){
        case(idade <= 6):
            return `Você tem menos de 7 anos, então sua tarifa é gratuita!!`
        break;
        case(idade >= 60):
            let tarifaIdoso = (tarifa * 30) / 100;
            let tarifaIdosoResult = tarifa - tarifaIdoso;
            return `Você tem mais de 59 anos e portanto você ganhou 30% de desconto! Sua tarifa atual era R$${tarifa} e passou a ser R$${tarifaIdosoResult}`;
        break;
        case(idade > 6 || idade < 60):
            let tarifaEstudante = (tarifa * 50) / 100;
            let tarifaEstudanteResult = tarifa - tarifaEstudante;
            if(userType === "Estudante"){
                return `Você tem mais de 6 anos e é Estudante, portanto recebeu 50% de desconto na sua tarifa, que passou de R$${tarifa} para R$${tarifaEstudanteResult}`
            }else if(userType === "Regular"){
                return `Você tem mais de 6 anos e é Regular, portanto sua tarifa se mantém no valor normal de R$${tarifa}`
            }else{
                return `Você tem mais de 6 anos, portanto sua tarifa se mantém no valor normal de R$${tarifa}`
            }
        break;

        }
    }

const maria = calculaTaxa(5)
console.log(maria)

const pedro = calculaTaxa(15, "Estudante")
console.log(pedro)

const lucas = calculaTaxa(21, "Regular")
console.log(lucas)

const luis = calculaTaxa(75)
console.log(luis)
