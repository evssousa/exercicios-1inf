// RF01 — Registro do(a) público.
const nome = "Cristal Fernandes"
const idade = 18
const categoria = "comum"
let nivelAcesso

if (categoria === "comum") {
    nivelAcesso = "Acesso comum"
} else if (categoria === "vip") {
    nivelAcesso = "Acesso VIP"
} else {
    nivelAcesso = "Categoria inválida"
}

const possuiIngresso = true
const impedido = false
const valorIngresso = 180
const valorPago = 150 

//RF 2  Verificação da idade mínima
let idadeStatus;

if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

// RF 4 Verificação do nível de acesso
let acessoStatus

if (idade >= 18 && possuiIngresso && !impedido) {
    acessoStatus = "Acesso ao festival liberado"
} else {
    acessoStatus = "Acesso ao festival negado"
}

// RF 5 Verificação do pagamento
let pagamentoStatus

if (valorPago >= valorIngresso) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}
// RF06 — Cálculo do troco
let troco

if (valorPago >= valorIngresso) {
    troco = valorPago - valorIngresso
} else {
    troco = 0
}
// RF 7 Situação final
let statusFestival;

if (acessoStatus === "Acesso ao festival liberado" &&
    pagamentoStatus === "Pagamento aprovado") {
    statusFestival = "Entrada no festival confirmada"
} else {
    statusFestival = "Entrada no festival não confirmada"
}
// RF 8 Resumo
const resumo = `
Nome: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}
Valor do ingresso: R$ ${valorIngresso}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusFestival}
`
module.exports = {
    nome,
    idade,
    categoria,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusFestival,
    resumo
}
