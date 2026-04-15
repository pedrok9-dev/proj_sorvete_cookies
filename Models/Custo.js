class Custo {
    constructor(
        leite = 4.50,
        acucar = 4.80,
        creme = 12.90,
        baunilha = 65.00,
        oreo = 5.00
    ) {
        this.leite = leite
        this.acucar = acucar
        this.creme = creme
        this.baunilha = baunilha
        this.oreo = oreo

        this.precoIngredientes = {}
        this.custoTotal = 0
        this.custoPorPote = 0
        this.quantidadePotes = 0
    }

    calcularCustoTotal(qtdeIngredientes) {
        this.precoIngredientes = {
            leite: Number(((qtdeIngredientes.leite / 1000) * this.leite).toFixed(2)),
            acucar: Number(((qtdeIngredientes.acucar / 1000) * this.acucar).toFixed(2)),
            creme: Number(((qtdeIngredientes.creme / 1000) * this.creme).toFixed(2)),
            baunilha: Number(((qtdeIngredientes.baunilha / 1000) * this.baunilha).toFixed(2)),
            oreo: Number(((qtdeIngredientes.oreo / 1000) * this.oreo).toFixed(2)),
        }

        const soma =
            this.precoIngredientes.leite + this.precoIngredientes.acucar + this.precoIngredientes.creme + this.precoIngredientes.baunilha + this.precoIngredientes.oreo

        this.custoTotal = Number(soma.toFixed(2))
        return this.custoTotal
    }

    calcularCustoPote(qtdePotes) {
        this.quantidadePotes = qtdePotes
        this.custoPorPote = Number((this.custoTotal / this.quantidadePotes).toFixed(2))
        return this.custoPorPote
    }
}