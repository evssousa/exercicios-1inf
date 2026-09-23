// CRIE SUA SOLUÇÃO ABAIXO ================
const cliente = "Mariana Silva"
const cidade = "Fortaleza"
const produto = "Notebook Pro"
const categoria = "Notebook"
let preco = 3500
let quantidade = 2
let descontoPercentual = 10
let valorPago = 7000

const subtotal = preco * quantidade
const valorDesconto = subtotal * descontoPercentual
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