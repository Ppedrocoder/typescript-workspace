class Retangulo implements Forma {
    private base :number;
    private altura :number

    constructor (base:number, altura:number){
        this.base = base
        this.altura = altura
    }

    calcularArea(): number {
        return this.base * this.altura
    }

    calcularPerimetro(): number {
        return this.altura * 2 + this.base * 2
    }
}

let a = new Retangulo(5, 10)
console.log(a.calcularArea())
console.log(a.calcularPerimetro())