// CRIE SUA SOLUÇÃO ABAIXO ================

const cliente= "Mariana Silva"
const cidade= "Fortaleza"
//informações do cliente//

const produto= "Notebook Pro"
const categoria= "Notebook"
const quantidade= 2
const descontoPercentual= 10
const valorPago=7000
const preco=3500
const desconto=10
//informações o produto//

const subtotal = quantidade*preco
const valorDesconto = (subtotal * descontoPercentual)/100
const valorFinal = subtotal-valorDesconto
const troco = valorPago-valorFinal
//informações do cálculo//
const resumo= `TECHSTORE SISTEMAS
RESUMO DO PEDIDO


cliente: ${cliente}

produto: ${produto}
categoria: ${categoria}
quantidade: ${quantidade}
preco: R$ ${preco}
subtotal: R$ ${subtotal}
desconto: ${desconto}
valor Desconto: R$ ${valorDesconto}
valor Final: R$ ${valorFinal}
valor pago: R$ ${valorPago}
troco: RS ${troco}
`

console.log (`

TECHSTORE SISTEMAS
RESUMO DO PEDIDO


cliente: {MarianaSilva}

produto: ${produto}
categoria: ${categoria}
quantidade: ${quantidade}
preco: R$ ${preco}
subtotal: R$ ${subtotal}
desconto: ${desconto}
valor Desconto: R$ ${valorDesconto}
valor Final: R$ ${valorFinal}
expect(pedido.resumo).toContain("Mariana Silva")
valor pago: R$ ${valorPago}
troco: RS ${troco}`)




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
