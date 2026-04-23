import Sorvete from '../models/Sorvete.js'

// 'describe' cria um grupo de testes para organizar o relatório final
describe('Testes da Regra de Negócio: Classe Sorvete', () => {

    test('Deve calcular corretamente as medidas e o peso de um sorvete médio (diâmetro 12cm, altura 12.5cm)', () => {

        // 1. PREPARAR: Definindo os dados de entrada
        const diametroInformado = 12
        const alturaInformada = 12.5

        // 2. AGIR: Instanciando o objeto e chamando o método
        const sorveteMedio = new Sorvete(diametroInformado, alturaInformada)
        const pesoCalculado = sorveteMedio.getPesoUnitario()

        // 3. VALIDAR:
        // A classe não guarda o diâmetro, ela guarda o RAIO (12 / 2 = 6)
        expect(sorveteMedio.raio).toBe(6)
        expect(sorveteMedio.altura).toBe(12.5)
        // Validando se o resultado retornou maior que zero
        expect(pesoCalculado).toBeGreaterThan(0)
        // Validando a matemática do peso (Volume * 0.60 de densidade)
        expect(pesoCalculado).toBeCloseTo(848.230, 3)
    })

    test('Deve calcular o peso de um sorvete pequeno (diâmetro 10.5cm e altura 5.5cm)', () => {

        // PREPARAR E AGIR
        const sorvetePequeno = new Sorvete(10.5, 5.5)
        const pesoCalculado = sorvetePequeno.getPesoUnitario()

        // VALIDAR
        // O raio de 10.5 deve ser 5.25
        expect(sorvetePequeno.raio).toBe(5.25)
        expect(sorvetePequeno.altura).toBe(5.5)

        // Validando com precisão de 3 casas
        expect(pesoCalculado).toBeCloseTo(285.747, 3)
    })
})