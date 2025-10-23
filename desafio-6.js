// Receba ou armazene um valor de idade e informe a que faixa etária a idade pertence, baseado na classificação abaixo:

// Criança: 0 a 12 anos;
// Adolescente: 13 a 17 anos;
// Adulto: 18 a 59 anos;
// Idoso: 60+ anos.

const faixaEtarias = ["Criança", "Adolescente", "Adulto", "Idoso"]

const classificaFaixaEtaria = (idade) => {
    switch(true){

        case(idade >= 0 && idade <= 12):
            if(idade == 1){
                return `A idade de ${idade} ano está na faixa etária equivalente a ${faixaEtarias[0]} `
            } else{
                return `A idade de ${idade} anos está na faixa etária equivalente a ${faixaEtarias[0]} `
            }

        case(idade >= 13 && idade <= 17):
            return `A idade de ${idade} anos está na faixa etária equivalente a ${faixaEtarias[1]}`
        
        case(idade >= 18 && idade <= 59):
            return `A idade de ${idade} anos está na faixa etária equivalente a ${faixaEtarias[2]}`
            
        case(idade >= 60):
            return `A idade de ${idade} anos está na faixa etária equivalente a ${faixaEtarias[3]}`

        }

    }
    
const pedro = classificaFaixaEtaria(6);
console.log(pedro)

const maria = classificaFaixaEtaria(13);
console.log(maria)

const lucas = classificaFaixaEtaria(46);
console.log(lucas)

const luana = classificaFaixaEtaria(89);
console.log(luana)