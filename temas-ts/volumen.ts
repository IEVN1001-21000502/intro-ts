import { areas } from "./areas";

class volumenes extends areas{
    private altura:number;
    constructor(lado:number, ancho:number, radio:number, altura:number){
        super(lado, ancho, radio);
        this.altura = altura;
    }
    volumenPrismaRectangular():number{
        return this.areaRectangulo() * this.altura;
    }
    volumenPrismaCuadrado():number{
        return this.areaCuadrado() * this.altura;
    }
    volumenCilindro():number{
        return this.areaCirculo() * this.altura;
    }
}


const area = new areas(5,8,5);
console.log(`Area Rectangulo: ${Number(area.areaRectangulo)}`);
console.log(`Area Cuadrado: ${Number(area.areaCuadrado())}`);
console.log(`Area Circulo: ${Number(area.areaCirculo())}`);


const volumen = new volumenes(5, 8, 5, 10);
console.log(`Volumen del prisma Rectangular: ${Number(volumen.volumenPrismaRectangular)}`);
console.log(`Volumen del prisma Cuadrado: ${Number(volumen.volumenPrismaCuadrado())}`);
console.log(`Volumen del Cilindro: ${Number(volumen.volumenCilindro())}`);
