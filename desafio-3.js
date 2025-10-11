// Receba ou armazene os valores de lado de um retângulo e exiba os valores de área e perímetro.

class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    obterAreaPerimetro(){
        let areaRetangulo = this.largura * this.altura;
        let perimetroRetangulo = (this.largura * 2) + (this.altura * 2);

        if(this.altura <= 0 || this.largura <= 0){
            let retaguloNaoExiste = `Este retangulo possui largura ou altura menor ou igual a 0, portanto não existe.`
            console.log(retaguloNaoExiste);
        }else{
            let mensagemFinal = `A área desse retângulo é ${areaRetangulo}cm e o perimetro é ${perimetroRetangulo}cm`;
            console.log(mensagemFinal);
        }
    }
}

let retangulo1 = new Retangulo(10, 10);
retangulo1.obterAreaPerimetro()