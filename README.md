# 🍦 SaBôr Cookie & Gelato — Calculadora de Produção Industrial de Sorvete

Sistema de Programação Orientada a Objetos (POO) em JavaScript que simula o planejamento de produção de sorvetes em escala industrial. Dado o **diâmetro** e a **altura** de um pote cilíndrico, a **meta de produção** em toneladas e o **tamanho do pote**, o sistema calcula volume, peso unitário, rendimento, ingredientes necessários e custo total de produção.

---

## 📁 Estrutura do Projeto

```
SaBor-Calculadora/
├── index.html           # Interface web
├── style.css            # Estilos da aplicação
├── main.js              # Lógica de interação com a UI (DOM)
└── Models/
    ├── Sorvete.js       # Classe: volume e peso do pote
    ├── Receita.js       # Classe: escalonamento de ingredientes e rendimento
    └── Custo.js         # Classe: cálculo de custos de produção
```

---

## 🧱 Classes e Regras de Negócio

### `Sorvete`
Representa as propriedades físicas de um pote cilíndrico.

| Atributo   | Descrição                          |
|------------|------------------------------------|
| `raio`     | Metade do diâmetro informado (cm)  |
| `altura`   | Altura do pote (cm)                |
| `densidade`| Constante: 0.60 g/cm³             |

| Método              | Retorno                                  |
|---------------------|------------------------------------------|
| `calcularVolume()`  | Volume do cilindro em cm³               |
| `getPesoUnitario()` | Peso do pote em gramas (volume × 0.60)  |

---

### `Receita`
Escala os ingredientes de uma receita base de **900 g** para qualquer tonelagem.

**Receita base padrão:**

| Ingrediente        | Quantidade (g) |
|--------------------|----------------|
| Leite              | 500            |
| Creme de leite     | 175            |
| Açúcar             | 85             |
| Extrato de Baunilha| 10             |
| Oreo               | 130            |

| Método                      | Retorno                                       |
|-----------------------------|-----------------------------------------------|
| `escalarReceita(toneladas)` | Objeto com ingredientes em gramas             |
| `calcularPotes(toneladas)`  | Número inteiro de potes pelo peso por tamanho |

**Pesos por tamanho de pote:**

| Tamanho | Peso (g) |
|---------|----------|
| Pequeno | 400      |
| Médio   | 900      |
| Grande  | 1.700    |

---

### `Custo`
Calcula o custo de produção com base nas quantidades de ingredientes.

**Preços padrão (por kg):**

| Ingrediente         | Preço (R$/kg) |
|---------------------|---------------|
| Leite               | R$ 4,50       |
| Açúcar              | R$ 4,80       |
| Creme de leite      | R$ 12,90      |
| Extrato de Baunilha | R$ 65,00      |
| Oreo                | R$ 5,00       |

> Preços customizáveis via construtor.

| Método                          | Retorno                              |
|---------------------------------|--------------------------------------|
| `calcularCustoTotal(qtdes)`     | Custo total em R$ e por ingrediente  |
| `calcularCustoPote(qtdePotes)`  | Custo unitário por pote em R$        |

---

## 🖥️ Como Executar

### Interface Web

Abra o arquivo `index.html` diretamente no navegador ou sirva via servidor local:

```bash
# Com npx serve, por exemplo:
npx serve .
```

1. Preencha o **Diâmetro** e a **Altura** do pote (em cm)
2. Selecione o **Tamanho do Recipiente** (Pequeno / Médio / Grande)
3. Selecione a **Meta de Produção** (1 / 5 / 12 toneladas)
4. Clique em **"Calcular Produção"**

O sistema exibirá o rendimento em potes, a tabela de ingredientes escalados e o custo total e por pote.

---

## 📐 Exemplo de Saída

```
=== SABÔR COOKIE & GELATO — PRODUÇÃO ===

Tonelagem:              1t
Tamanho do pote:        medio (900g)
Volume do pote:         942.48 cm³
Peso estimado do pote:  565.49 g
Total de potes:         1111

--- Ingredientes escalados ---
Leite:                  555555.56 g
Creme de Leite:         194444.44 g
Açúcar:                 94444.44 g
Extrato de Baunilha:    11111.11 g
Oreo:                   144444.44 g

--- Custos ---
Custo total:            R$ 5.222,22
Custo por pote:         R$ 4,70
```

---

## 🛠️ Tecnologias

- **JavaScript (ES6+)** — Classes, módulos, DOM
- **HTML5 / CSS3** — Interface web responsiva
- **Google Fonts** — Baloo 2 + Nunito

---

## 📄 Licença

Projeto desenvolvido para a **SaBôr Cookie & Gelato**.
