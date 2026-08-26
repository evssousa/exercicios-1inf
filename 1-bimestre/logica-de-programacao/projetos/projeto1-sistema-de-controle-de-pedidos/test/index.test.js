const pedido = require("../index.js")

test("O cliente deve estar correto", () => {
  expect(pedido.cliente).toBe("Mariana Silva")
})

test("A cidade deve estar correta", () => {
  expect(pedido.cidade).toBe("Fortaleza")
})

test("O produto deve estar correto", () => {
  expect(pedido.produto).toBe("Notebook Pro")
})

test("A categoria deve estar correta", () => {
  expect(pedido.categoria).toBe("Notebook")
})

test("O preço deve ser 3500", () => {
  expect(pedido.preco).toBe(3500)
})

test("A quantidade deve ser 2", () => {
  expect(pedido.quantidade).toBe(2)
})

test("O desconto deve ser 10%", () => {
  expect(pedido.descontoPercentual).toBe(10)
})

test("O valor pago deve ser 7000", () => {
  expect(pedido.valorPago).toBe(7000)
})

test("O subtotal deve ser 7000", () => {
  expect(pedido.subtotal).toBe(7000)
})

test("O valor do desconto deve ser 700", () => {
  expect(pedido.valorDesconto).toBe(700)
})

test("O valor final deve ser 6300", () => {
  expect(pedido.valorFinal).toBe(6300)
})

test("O troco deve ser 700", () => {
  expect(pedido.troco).toBe(700)
})

test("O resumo deve conter o nome do cliente", () => {
  expect(pedido.resumo).toContain("Mariana Silva")
})

test("O resumo deve conter o produto", () => {
  expect(pedido.resumo).toContain("Notebook Pro")
})

test("O resumo deve conter o valor final", () => {
  expect(pedido.resumo).toContain("R$ 6300")
})

test("O resumo deve conter o troco", () => {
  expect(pedido.resumo).toContain("R$ 700")
})