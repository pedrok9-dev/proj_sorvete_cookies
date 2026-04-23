const Custo = require("../models/Custo");

describe('Testes da regra de negócio', () => {

    test('Deve iniciar com os preços padrão', () => {
        const custoPadrao = new Custo()
        expect(custoPadrao.leite).toBe(4.50)
        expect(custoPadrao.acucar).toBe(4.80)
        expect(custoPadrao.creme).toBe(12.90)
        expect(custoPadrao.baunilha).toBe(65.00)
        expect(custoPadrao.oreo).toBe(5.00)
    })

    test('Deve inicializar atributos corretamente', () => {
        const custo = new Custo()
        expect(custo.precoIngredientes).toEqual({})
        expect(custo.custoTotal).toBe(0)
        expect(custo.custoPorPote).toBe(0)
        expect(custo.quantidadePotes).toBe(0)
    })

    test('Deve calcular o custo dos ingredientes', () => {
        const custo = new Custo()
        const ingredientes = {
            leite:    1000000,
            acucar:   1000000,
            creme:    1000000,
            baunilha: 1000000,
            oreo:     1000000
        }
        custo.calcularCustoTotal(ingredientes)

        expect(custo.precoIngredientes.leite).toBe(4500.00)
        expect(custo.precoIngredientes.acucar).toBe(4800.00)
        expect(custo.precoIngredientes.creme).toBe(12900.00)
        expect(custo.precoIngredientes.baunilha).toBe(65000.00)
        expect(custo.precoIngredientes.oreo).toBe(5000.00)
    })

    test('Deve somar o custo total da produção', () => {
        const custo = new Custo()
        const ingredientes = {
            leite:    1000000,
            acucar:   1000000,
            creme:    1000000,
            baunilha: 1000000,
            oreo:     1000000
        }
        custo.calcularCustoTotal(ingredientes)

        const somaEsperada = Number((4500 + 4800 + 12900 + 65000 + 5000).toFixed(2))
        expect(custo.custoTotal).toBe(somaEsperada)
    })

    test('Deve calcular custo por pote corretamente', () => {
        const custo = new Custo()
        const ingredientesMock = {
            leite:    1000000,
            acucar:   1000000,
            creme:    1000000,
            baunilha: 1000000,
            oreo:     1000000
        }
        custo.calcularCustoTotal(ingredientesMock)

        const custoPorPote = custo.calcularCustoPote(100)
        const esperado = Number((custo.custoTotal / 100).toFixed(2))

        expect(custoPorPote).toBe(esperado)
        expect(custo.custoPorPote).toBe(esperado)
        expect(custo.quantidadePotes).toBe(100)
    })

    test('Deve permitir preços customizados no construtor', () => {
        const custo = new Custo(10, 10, 1, 50, 20)
        const ingredientesMock = {
            leite:    1000000,
            acucar:   0,
            creme:    0,
            baunilha: 1000000,
            oreo:     0
        }
        custo.calcularCustoTotal(ingredientesMock)

        expect(custo.precoIngredientes.leite).toBe(10000.00)
        expect(custo.precoIngredientes.baunilha).toBe(50000.00)
    })

    test('calcularCustoTotal deve retornar o custo total', () => {
        const custo = new Custo()
        const ingredientes = {
            leite:    2000,
            acucar:   1000,
            creme:    500,
            baunilha: 0,
            oreo:     0
        }
        const resultado = custo.calcularCustoTotal(ingredientes)
        const esperado = Number((9.00 + 4.80 + 6.45).toFixed(2))
        expect(resultado).toBe(esperado)
    })

    test('Deve retornar custo zero quando todos os ingredientes são zero', () => {
        const custo = new Custo()
        custo.calcularCustoTotal({
            leite: 0, acucar: 0, creme: 0, baunilha: 0, oreo: 0
        })
        expect(custo.custoTotal).toBe(0)
        expect(custo.precoIngredientes.leite).toBe(0)
    })

    test('Deve substituir os valores ao recalcular', () => {
        const custo = new Custo()
        custo.calcularCustoTotal({
            leite: 1000, acucar: 1000, creme: 1000, baunilha: 1000, oreo: 1000
        })
        const primeiroTotal = custo.custoTotal

        custo.calcularCustoTotal({
            leite: 2000, acucar: 2000, creme: 2000, baunilha: 2000, oreo: 2000
        })
        expect(custo.custoTotal).toBe(Number((primeiroTotal * 2).toFixed(2)))
    })

    test('Deve atualizar quantidadePotes ao calcular custo por pote', () => {
        const custo = new Custo()
        custo.calcularCustoTotal({
            leite: 5000, acucar: 5000, creme: 5000, baunilha: 5000, oreo: 5000
        })
        custo.calcularCustoPote(50)
        expect(custo.quantidadePotes).toBe(50)
    })
})