class Sorvete{
    constructor(diametro,altura){
        this.raio = diametro / 2
        this.altura = altura
        this.densidade = 0.60
    }

    calcularVolume(){
        let volume = this.altura * (Math.PI * this.raio * this.raio)
        return volume
    }

    getPesoUnitario(){
        return this.calcularVolume() * this.densidade
    }
}

