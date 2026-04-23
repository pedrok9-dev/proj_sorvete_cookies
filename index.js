const btnCalcular   = document.getElementById('btn-calcular')
const btnLimpar     = document.getElementById('btn-limpar')
const selectTamanho = document.getElementById('tamanho')
const selectMeta    = document.getElementById('meta-producao')
const divResultado  = document.getElementById('resultado')
 
btnCalcular.addEventListener('click', () => {
    const diametro    = Number(document.getElementById('diametro').value)
    const altura      = Number(document.getElementById('altura').value)
    const tamanhoPote = selectTamanho.value
    const toneladas   = Number(selectMeta.value)
 
    if (!diametro || !altura) {
        divResultado.innerHTML = `
            <div class="resultado-titulo">CUSTO TOTAL DA PRODUÇÃO:</div>
            <div class="resultado-body">
                <p class="erro">⚠️ Preencha o Diâmetro e a Altura antes de calcular.</p>
            </div>
            <div class="custo-pote-box">Custo do Pote: —</div>
        `
        return
    }
 
    const sorvete  = new Sorvete(diametro, altura)
    const pesoPote = sorvete.getPesoUnitario()
 
    const receita         = new Receita(500, 175, 85, 10, 130, tamanhoPote)
    const qtdIngredientes = receita.escalarReceita(toneladas)
    const qtdPotes        = receita.calcularPotes(toneladas)
 
    const custo = new Custo()
    custo.calcularCustoTotal(qtdIngredientes)
    custo.calcularCustoPote(qtdPotes)
 
    const pi            = custo.precoIngredientes
    const nomeTamanho   = selectTamanho.options[selectTamanho.selectedIndex].text
    const nomeMeta      = selectMeta.options[selectMeta.selectedIndex].text
 
    const fmt = (n) => Number(n).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
 
    divResultado.innerHTML = `
        <div class="resultado-titulo">CUSTO TOTAL DA PRODUÇÃO: R$ ${fmt(custo.custoTotal)}</div>
        <div class="resultado-body">
            <p>📦 <strong>Relatório:</strong> ${nomeMeta} de Sorvete</p>
            <p>🍦 <strong>Tamanho do pote:</strong> ${nomeTamanho}</p>
            <p>⚖️ <strong>Peso estimado do pote:</strong> ${pesoPote.toFixed(1)} g</p>
            <p>🔢 <strong>Rendimento:</strong> ${qtdPotes.toLocaleString('pt-BR')} potes</p>
            <div class="tabela-wrap">
                <table>
                    <thead>
                        <tr><th>Ingrediente</th><th>Quantidade</th><th>Custo (R$)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Leite</td><td>${(qtdIngredientes.leite / 1000).toFixed(0)} L</td><td>R$ ${fmt(pi.leite)}</td></tr>
                        <tr><td>Creme de Leite</td><td>${(qtdIngredientes.creme / 1000).toFixed(0)} L</td><td>R$ ${fmt(pi.creme)}</td></tr>
                        <tr><td>Açúcar</td><td>${(qtdIngredientes.acucar / 1000).toFixed(0)} kg</td><td>R$ ${fmt(pi.acucar)}</td></tr>
                        <tr><td>Extrato de Baunilha</td><td>${(qtdIngredientes.baunilha / 1000).toFixed(2)} kg</td><td>R$ ${fmt(pi.baunilha)}</td></tr>
                        <tr><td>Oreo</td><td>${(qtdIngredientes.oreo / 1000).toFixed(0)} kg</td><td>R$ ${fmt(pi.oreo)}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="custo-pote-box">Custo do Pote: R$ ${fmt(custo.custoPorPote)}</div>
    `
})
 
btnLimpar.addEventListener('click', () => {
    selectTamanho.value = 'medio'
    selectMeta.value    = '1'
    document.getElementById('diametro').value = ''
    document.getElementById('altura').value   = ''
 
    divResultado.innerHTML = `
        <div class="resultado-titulo">CUSTO TOTAL DA PRODUÇÃO:</div>
        <div class="resultado-body">
            <p class="placeholder-txt">Insira os dados do pote e clique em <strong>Calcular Produção</strong> para ver o rendimento, ingredientes e custos.</p>
        </div>
        <div class="custo-pote-box">Custo do Pote: —</div>
    `
})