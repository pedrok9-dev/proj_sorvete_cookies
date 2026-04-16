export default class Sorvete{
    constructor(raio,altura){
        this.raio = raio
        this.altura = altura
        this.densidade = 0.60 
    }

    calcularVolume(){
        let volume = this.altura * (Math.PI * this.raio * this.raio)
        return volume
    }

   
    calPesoUnitario(){
        return this.calcularVolume() * this.densidade
    }
}
