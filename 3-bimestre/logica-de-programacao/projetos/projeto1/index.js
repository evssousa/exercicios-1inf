// CRIE SUA SOLUÇÃO ABAIXO ================
const cliente = "Mariana Silva"
const cidade = "Fortaleza"
const produto = "Notebook Pro"
const categoria = "Notebook"
const preco = 3500
const quantidade = 2
const descontoPercentual = 10
const valorPago = 7000

const subtotal = preco * quantidade
const valorDesconto = subtotal * descontoPercentual / 100
const valorFinal = subtotal - valorDesconto
const troco = valorPago - valorFinal

const resumo = `
cliente= ${cliente}
cidade= ${cidade}
  produto= ${produto}
  categoria= ${categoria}
  preco= ${preco}
  quantidade= ${quantidade}
  descontoPercentual= ${descontoPercentual}
  valorPago= ${valorpago}
  subtotal= ${subtotal}
  valorDesconto= ${valorDesconto}
  valoFinal= ${valorFinal}
  troco= ${troco}


`

module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
}