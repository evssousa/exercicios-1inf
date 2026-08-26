# 🚀 PROJETO 1 - SISTEMA DE CONTROLE DE PEDIDOS

# 🏢 PROBLEMA

Você acaba de entrar como **estagiário** em uma empresa de tecnologia chamada **TechStore Sistemas**.

A empresa possui uma loja especializada em produtos de informática, como:

- notebooks;
- teclados;
- mouses;
- monitores;
- headsets;
- placas de vídeo;
- periféricos.

Atualmente, os vendedores registram os pedidos manualmente e fazem os cálculos utilizando uma calculadora.

Isso está causando alguns problemas:

- erros no cálculo do valor total;
- dificuldade para calcular descontos;
- erros no valor do troco;
- demora para gerar o resumo do pedido;
- informações diferentes sendo registradas por cada vendedor.

Seu chefe solicitou que você desenvolva uma **primeira versão de um sistema responsável por processar um pedido de venda**.

# 📋 REQUISITO

Seu chefe entregou o seguinte requisito:

> **Como vendedor da TechStore, quero informar os dados do cliente e do produto vendido para que o sistema calcule o valor da compra, aplique um desconto, calcule o valor final, informe o pagamento e o troco e gere um resumo completo do pedido.**
> 

A primeira versão do sistema será executada no terminal.

Não será necessário criar uma interface gráfica.

# 🧩 PROJETO

O programa deverá receber informações sobre:

### Cliente

- nome;
- cidade.

### Produto

- nome;
- categoria;
- preço;
- quantidade.

### Pagamento

- valor pago.

### Desconto

- percentual de desconto.

A partir dessas informações, o sistema deverá realizar os cálculos necessários e gerar um resumo da venda.

# 📌 DADOS DO PEDIDO

Para esta Sprint, os dados definidos pelo setor de negócios são:

```
Cliente: Mariana Silva
Cidade: Fortaleza
Produto: Notebook Pro
Categoria: Notebook
Preço: 3500
Quantidade: 2
Desconto Percentual: 10
Valor Pago: 7000
```

# 🧮 REGRA 1 — Calcular o subtotal

O primeiro cálculo deverá determinar o valor da compra **antes do desconto**.

A regra é:

```
subtotal = preço × quantidade
```

No exemplo:

```
3500 × 2 = 7000
```

Resultado: `7000`

# 🧮 REGRA 2 — Calcular o valor do desconto

O desconto será informado como uma porcentagem.

Neste pedido:

```
10%
```

Para descobrir o valor correspondente ao desconto:

```
valor do desconto = subtotal × percentual ÷ 100
```

Então:

```
7000 × 10 ÷ 100 = 700
```

Resultado: `700`.

# 🧮 REGRA 3 — Calcular o valor final

Depois de calcular o desconto:

```
valor final = subtotal - valor do desconto
```

Portanto:

```
7000 - 700 = 6300
```

# 💰 REGRA 4 — Calcular o troco

O cliente informou que pagará:

```
R$ 7.000
```

O valor da compra é:

```
R$ 6.300
```

Então:

```
troco = valor pago - valor final
```

Resultado:

```
7000 - 6300 = 700
```

# 🧾 REGRA 5 — Criar o resumo do pedido

O sistema deverá gerar uma mensagem contendo todas as principais informações da venda.

O resultado esperado será:

```
==================================================
TECHSTORE SISTEMAS
RESUMO DO PEDIDO
==================================================

Cliente: Mariana Silva
Cidade: Fortaleza

Produto: Notebook Pro
Categoria: Notebook
Quantidade: 2
Preço unitário: R$ 3500

Subtotal: R$ 7000
Desconto: 10%
Valor do desconto: R$ 700
Valor final: R$ 6300

Valor pago: R$ 7000
Troco: R$ 700

Obrigado pela compra!
==================================================
```

Para isso, deverá ser utilizada uma **template string**.

# 🧠 PLANEJAMENTO DO SISTEMA

Antes de escrever o código, precisamos identificar todas as informações.

| Informação | Variável | Tipo |
| --- | --- | --- |
| Nome do cliente | `cliente` | String |
| Cidade | `cidade` | String |
| Produto | `produto` | String |
| Categoria | `categoria` | String |
| Preço | `preco` | Number |
| Quantidade | `quantidade` | Number |
| Desconto | `descontoPercentual` | Number |
| Valor pago | `valorPago` | Number |
| Subtotal | `subtotal` | Number |
| Valor do desconto | `valorDesconto` | Number |
| Valor final | `valorFinal` | Number |
| Troco | `troco` | Number |
| Resumo | `resumo` | String |

# 🔄 FLUXO DO SISTEMA

O programa deverá seguir esta lógica:

```
                    DADOS
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
    Cliente         Produto       Pagamento
       │              │              │
       └──────────────┼──────────────┘
                      ↓
                   Subtotal
                      ↓
                Valor do desconto
                      ↓
                  Valor final
                      ↓
                    Troco
                      ↓
             Resumo do pedido
```

# 🧱 Organização do código

O código deverá ser organizado em etapas.

1. Dados do cliente
2. Dados do produto
3. Dados do pagamento
4. Cálculos
5. Resumo

# 📂 Estrutura do Projeto

O projeto deverá possuir:

```
projeto-1-techstore
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

# 💻 IMPLEMENTAÇÃO

O arquivo `index.js` deverá implementar o requisito.