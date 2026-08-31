// CRIE SUA SOLUÇÃO ABAIXO ================
const cliente = "Mariana Silva"
const cidade = "Fortaleza"
const produto = "Notebook Pro"
const categoria = "Notebook"
const quantidade = 2
const preco = 3500 
const subtotal = preco * quantidade
const descontoPercentual = 10
const valorDesconto = (subtotal * descontoPercentual)/100
const valorFinal = subtotal - valorDesconto
const valorPago = 7000
const troco = valorPago - valorFinal


const resumo = (`==================================================
TECHSTORE SISTEMAS
RESUMO DO PEDIDO
==================================================

cliente: ${cliente}
cidade:  ${cidade}

produto: ${produto}
categoria: ${categoria}
quantidade: ${quantidade}
preço unitário: ${preco}
subtotal: R$ ${subtotal}
desconto: ${descontoPercentual}%
valorDesconto: ${valorDesconto}
valor final: R$ ${valorFinal}

valor pago: R$ ${valorPago}
troco: R$ ${troco}

Obrigado pela compra!
==================================================`)
console.log(resumo)



// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
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