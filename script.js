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

const pinvestInput = document.getElementById("pinvest");
const pinvestOutput = document.getElementById("pinvestOutput");

pinvestInput.addEventListener("change", () => {
  pinvestOutput.innerText = pinvestInput.value;
  atualizarSaldo();
});

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

  // Recupera o percentual de investimento
  var percentualInvestimento = parseFloat(document.getElementById("pinvest").value) || 0;

  // Realiza as operações de adição e subtração
  var totalReceitas = salario + outrasReceitas;
  var totalDespesas = agua + aluguel + energia + internet + mercado + cartaoCredito + outrasDespesas;
  var saldo = totalReceitas - totalDespesas;

  // Calcula o saldo de investimento com base no percentual definido pelo usuário
  var saldoInvestimento = saldo * (percentualInvestimento / 100);

  // Subtrai o saldo de investimento do saldo total
  saldo -= saldoInvestimento;

  // Exibe os resultados nos campos de saída correspondentes
  document.getElementById("saldo").value = saldo.toFixed(2);
  document.getElementById("saldoInvestimento").value = saldoInvestimento.toFixed(2);
}

function limparCampos() {
  // redefine os valores dos campos de entrada e saída
  document.getElementById("salario").value = "";
  document.getElementById("outrasReceitas").value = "";
  document.getElementById("agua").value = "";
  document.getElementById("aluguel").value = "";
  document.getElementById("energia").value = "";
  document.getElementById("internet").value = "";
  document.getElementById("mercado").value = "";
  document.getElementById("cartaoCredito").value = "";
  document.getElementById("outrasDespesas").value = "";
  document.getElementById("saldo").value = "";
document.getElementById("saldoInvestimento").value = "placeholder";
} 
// Chama a função atualizarSaldo ao carregar a página
atualizarSaldo(); 
// Adiciona o evento de click ao botão "Limpar"
document.getElementById("limpar").addEventListener("click", limparCampos);