export default class Custo{
    constructor(leite = 5 ,creme = 1.75 ,acucar = 0.85 ,baunilha = 0.10 ,biscoito = 1.30){
        this.leite = leite
        this.creme = creme
        this.acucar = acucar
        this.baunilha = baunilha
        this.biscoito = biscoito

        this.precoIngredientes = {}
        this.custoTotal = 0
        this.custoPote = 0
    }

    calcularCustoTotal(qtdeIngredientes){
        this.precoIngredientes = {
            leite: Number(((qtdeIngredientes.leite / 1000) * this.leite) .toFixed(2)),
            creme: Number(((qtdeIngredientes.creme / 1000) * this.creme) .toFixed(2)),            
            acucar: Number(((qtdeIngredientes.acucar / 1000) * this.acucar) .toFixed(2)),            
            baunilha: Number(((qtdeIngredientes.baunilha / 1000) * this.baunilha) .toFixed(2)),            
            biscoito: Number(((qtdeIngredientes.biscoito / 1000) * this.biscoito) .toFixed(2)),            
        }

       const soma = this.precoIngredientes.leite + this.precoIngredientes.creme + this.precoIngredientes.acucar + this.precoIngredientes.baunilha + this.precoIngredientes.biscoito
        this.custoTotal = Number(soma.toFixed(2))
        return this.custoTotal

    }

    calcularCustoPote(qtdePote){
    this.custoPote = Number((this.custoTotal / qtdePote).toFixed(2))
    return this.custoPote
    }

}