// Adiciona eventos de input aos campos de entrada
document.getElementById("salario").addEventListener("input", atualizarSaldo);
document.getElementById("outrasReceitas").addEventListener("input", atualizarSaldo);
document.getElementById("agua").addEventListener("input", atualizarSaldo);
document.getElementById("aluguel").addEventListener("input", atualizarSaldo);
document.getElementById("energia").addEventListener("input", atualizarSaldo);
document.getElementById("internet").addEventListener("input", atualizarSaldo);
document.getElementById("mercado").addEventListener("input", atualizarSaldo);
document.getElementById("cartaoCredito").addEventListener("input", atualizarSaldo);
document.getElementById("outrasDespesas").addEventListener("input", atualizarSaldo);



function atualizarSaldo() {
// Recupera os valores dos campos de entrada
var salario = parseFloat(document.getElementById("salario").value) || 0;
var outrasReceitas = parseFloat(document.getElementById("outrasReceitas").value) || 0;
var agua = parseFloat(document.getElementById("agua").value) || 0;
var aluguel = parseFloat(document.getElementById("aluguel").value) || 0;
var energia = parseFloat(document.getElementById("energia").value) || 0;
var internet = parseFloat(document.getElementById("internet").value) || 0;
var mercado = parseFloat(document.getElementById("mercado").value) || 0;
var cartaoCredito = parseFloat(document.getElementById("cartaoCredito").value) || 0;
var outrasDespesas = parseFloat(document.getElementById("outrasDespesas").value) || 0;

// Realiza as operações de adição e subtração
var totalReceitas = salario + outrasReceitas;
var totalDespesas = agua + aluguel + energia + internet + mercado + cartaoCredito + outrasDespesas;
var saldo = totalReceitas - totalDespesas;
var saldoInvestimento = saldo > 0 ? saldo : 0;

// Subtrai 30% do saldo e adiciona ao saldo de investimento
var saldoInvestimento = saldo * 0.3;
saldo -= saldoInvestimento;

// Exibe os resultados nos campos de saída correspondentes
document.getElementById("saldo").value = saldo.toFixed(2);
document.getElementById("saldoInvestimento").value = saldoInvestimento.toFixed(2);
}

function limparCampos() {
// redefine os valores dos campos de entrada e saída
document.getElementById("salario").value = "placeholder";
document.getElementById("outrasReceitas").value = "placeholder";
document.getElementById("agua").value = "placeholder";
document.getElementById("aluguel").value = "placeholder";
document.getElementById("energia").value = "placeholder";
document.getElementById("internet").value = "placeholder";
document.getElementById("mercado").value = "placeholder";
document.getElementById("cartaoCredito").value = "placeholder";
document.getElementById("outrasDespesas").value = "placeholder";
document.getElementById("saldo").value = "placeholder";
document.getElementById("saldoInvestimento").value = "placeholder";
} 
// Chama a função atualizarSaldo ao carregar a página
atualizarSaldo(); 
// Adiciona o evento de click ao botão "Limpar"
document.getElementById("limpar").addEventListener("click", limparCampos);