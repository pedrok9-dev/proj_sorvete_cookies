const Receita = require("../Models/Receita");

describe('Testes unitários da classe Receita', () => {

    test('Deve iniciar com os valores padrão', () => {
        const receita = new Receita()
        expect(receita.leite).toBe(500)
        expect(receita.creme).toBe(175)
        expect(receita.acucar).toBe(85)
        expect(receita.baunilha).toBe(10)
        expect(receita.oreo).toBe(130)
        expect(receita.tamanhoPote).toBe(undefined)
    })

    test('Deve calcular a massa total corretamente', () => {
        const receita = new Receita()
        expect(receita.massaTotal).toBe(900)

        const receitaCustom = new Receita(500, 175, 85, 10, 130)
        expect(receitaCustom.massaTotal).toBe(900)
    })

    test('Escalar receita para 1 tonelada', () => {
        const receita = new Receita()
        const proporcao = receita.escalarReceita(1)

        expect(proporcao.leite).toBe(555555.56)
        expect(proporcao.creme).toBe(194444.44)
        expect(proporcao.acucar).toBe(94444.44)
        expect(proporcao.baunilha).toBe(11111.11)
        expect(proporcao.oreo).toBe(144444.44)
    })

    test('Escalar receita para 12 toneladas', () => {
        const receita = new Receita()
        const proporcao = receita.escalarReceita(12)

        expect(proporcao.leite).toBe(6666666.67)
        expect(proporcao.creme).toBe(2333333.33)
        expect(proporcao.acucar).toBe(1133333.33)
        expect(proporcao.baunilha).toBe(133333.33)
        expect(proporcao.oreo).toBe(1733333.33)
    })

    test('Potes pequenos (400g) com 1 tonelada', () => {
        const receita = new Receita(500, 175, 85, 10, 130, 'pequeno')
        const qtPotes = receita.calcularPotes(1)
        expect(qtPotes).toBe(2500)
    })

    test('Potes médios (900g) com 5 toneladas', () => {
        const receita = new Receita(500, 175, 85, 10, 130, 'medio')
        const qtPotes = receita.calcularPotes(5)
        expect(qtPotes).toBe(5555)
    })

    test('Potes grandes (1700g) com 12 toneladas', () => {
        const receita = new Receita(500, 175, 85, 10, 130, 'grande')
        const qtPotes = receita.calcularPotes(12)
        expect(qtPotes).toBe(7058)
    })

    test('escalarReceita deve retornar objeto com todos os ingredientes', () => {
        const receita = new Receita()
        const proporcao = receita.escalarReceita(1)

        expect(proporcao).toHaveProperty('leite')
        expect(proporcao).toHaveProperty('creme')
        expect(proporcao).toHaveProperty('acucar')
        expect(proporcao).toHaveProperty('baunilha')
        expect(proporcao).toHaveProperty('oreo')
    })

   test('Soma dos ingredientes escalados deve ser igual à quantidade total em gramas', () => {
    const receita = new Receita(500, 175, 85, 10, 130)
    const proporcao = receita.escalarReceita(3)

    const somaTotal = Number((
        proporcao.leite +
        proporcao.creme +
        proporcao.acucar +
        proporcao.baunilha +
        proporcao.oreo
    ).toFixed(2))

    expect(somaTotal).toBeCloseTo(3 * 1_000_000, 0)
})
    test('Quantidade de potes deve dobrar ao dobrar as toneladas', () => {
        const receita = new Receita(500, 175, 85, 10, 130, 'pequeno')

        const potes1t = receita.calcularPotes(1)
        const potes2t = receita.calcularPotes(2)

        expect(potes2t).toBe(potes1t * 2)
    })
})