class Receita {
    constructor(leite = 500, creme = 175, acucar = 85, baunilha = 10, oreo = 130, tamanhoPote) {
        this.leite = leite
        this.creme = creme
        this.acucar = acucar
        this.baunilha = baunilha
        this.oreo = oreo
        this.tamanhoPote = tamanhoPote
        this.massaTotal = leite + creme + acucar + baunilha + oreo
    }

    escalarReceita(toneladas) {
        const fator = (toneladas * 1_000_000) / this.massaTotal
        return {
            leite: Number((this.leite * fator).toFixed(2)),
            creme: Number((this.creme * fator).toFixed(2)),
            acucar: Number((this.acucar * fator).toFixed(2)),
            baunilha: Number((this.baunilha * fator).toFixed(2)),
            oreo: Number((this.oreo * fator).toFixed(2)),
        }
    }

    calcularPotes(toneladas) {
        const pesoPote = { pequeno: 400, medio: 900, grande: 1700 }
        return Math.floor((toneladas * 1_000_000) / pesoPote[this.tamanhoPote])
    }
}

module.exports = Receita