export default class Receita{
constructor(leite = 500, creme = 175, acucar = 85, baunilha = 10, biscoito = 130){
        this.leite = leite
        this.creme = creme
        this.acucar = acucar
        this.baunilha = baunilha
        this.biscoito = biscoito
        this.tamPote = tamPote
        this.massaTotal  = leite + creme + acucar + baunilha + biscoito
 }
    
    escalarReceita(toneladas){
    const medida = ( toneladas * 1000000) / this.massaTotal
    return {
        leite: Number((this.leite * medida).toFixed(2)),
        creme: Number((this.creme *medida).toFixed(2)),
        baunilha: Number((this.baunilha * medida).toFixed(2)),
        acucar:  Number((this.acucar * medida).toFixed(2)),
        biscoito: Number((this.biscoito * medida).toFixed(2))

       } 
    }

    calcularPotes(toneladas) {
    const gramasTotais = toneladas * 1000000

    let peso

    if (this.tamanhoPote === "pequeno") peso = 400
    else if (this.tamanhoPote === "medio") peso = 900
    else if (this.tamanhoPote === "grande") peso = 1700

    return Math.floor(gramasTotais / peso)
}
}