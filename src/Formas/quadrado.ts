export class Quadrado implements Forma {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return this.lado * 4
    }
}

let a = new Quadrado(5)
console.log(a.calcularArea())
console.log(a.calcularPerimetro())
