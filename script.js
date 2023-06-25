// Variáveis de transações e despesas
let transactions = [];
let expenses = [];

// Elementos do DOM
const transactionList = document.getElementById('transaction-list');
const expenseList = document.getElementById('expense-list');
const transactionForm = document.querySelector('#transaction-form form');
const expenseForm = document.querySelector('#expense-form');
const incomeDisplay = document.getElementById('income-value');
const expenseDisplay = document.getElementById('expense-value');
const balanceDisplay = document.getElementById('balance-value');

// Função para adicionar uma transação
function addTransaction(description, amount) {
  const transaction = {
    description,
    amount
  };
  transactions.push(transaction);
}

// Função para adicionar uma despesa
function addExpense(description, amount) {
  const expense = {
    description,
    amount
  };
  expenses.push(expense);
}

// Função para exibir as transações na lista
function displayTransactions() {
  transactionList.innerHTML = '';
  transactions.forEach((transaction, index) => {
    const listItem = document.createElement('div');
    listItem.classList.add('transaction-item');
    listItem.innerHTML = `
      <div class="transaction-description">
        <p>${transaction.description}</p>
        <p class="transaction-amount ${transaction.amount > 0 ? 'income' : 'expense'}">${formatCurrency(transaction.amount)}</p>
        <p class="transaction-timestamp">${transaction.timestamp.toLocaleString()}</p>
        <span class="delete-icon" onclick="deleteTransaction(${index})"><i class="fas fa-trash-alt"></i></span>
      </div>
    `;
    transactionList.appendChild(listItem);
  });
}

// Função para exibir as despesas na lista
function displayExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const listItem = document.createElement('div');
    listItem.classList.add('transaction-item');
    listItem.innerHTML = `
      <div class="transaction-description">
        <p>${expense.description}</p>
        <p class="transaction-amount expense">${formatCurrency(expense.amount)}</p>
        <p class="transaction-timestamp">${expense.timestamp.toLocaleString()}</p>
        <span class="delete-icon" onclick="deleteExpense(${index})"><i class="fas fa-trash-alt"></i></span>
      </div>
    `;
    expenseList.appendChild(listItem);
  });
}

// Função para formatar o valor monetário
function formatCurrency(value) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return formatter.format(value);
}

// Função para atualizar o resumo
function updateSummary() {
  const totalIncome = transactions.reduce((sum, transaction) => sum + Math.max(transaction.amount, 0), 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + Math.max(expense.amount, 0), 0);
  const balance = totalIncome - totalExpense;

  incomeDisplay.textContent = formatCurrency(totalIncome);
  expenseDisplay.textContent = formatCurrency(totalExpense);
  balanceDisplay.textContent = formatCurrency(balance);

  if (balance < 0) {
    balanceDisplay.style.color = 'red';
  } else if (balance > 0) {
    balanceDisplay.style.color = 'green';
  } else {
    balanceDisplay.style.color = 'blue';
  }
}

// Função para excluir uma transação
function deleteTransaction(index) {
  transactions.splice(index, 1);
  displayTransactions();
  updateSummary();
}

// Função para excluir uma despesa
function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
  updateSummary();
}

// Evento de envio do formulário de transação
transactionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  if (description === 'Personalizada') {
    const customDescription = prompt('Digite a descrição:');
    if (customDescription !== null && customDescription.trim() !== '') {
      addTransaction(customDescription, amount);
    }
  } else {
    addTransaction(description, amount);
  }
  displayTransactions();
  updateSummary();
  transactionForm.reset();
});

// Evento de envio do formulário de despesa
expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.getElementById('expense-description').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);
  if (description === 'Personalizada') {
    const customDescription = prompt('Digite a descrição:');
    if (customDescription !== null && customDescription.trim() !== '') {
      addExpense(customDescription, amount);
    }
  } else {
    addExpense(description, amount);
  }
  displayExpenses();
  updateSummary();
  expenseForm.reset();
});

// Função inicial para exibir as transações e atualizar o resumo
function initialize() {
  displayTransactions();
  displayExpenses();
  updateSummary();
}

document.addEventListener("DOMContentLoaded", function() {
  const descriptionSelect = document.getElementById("description");
  const expenseDescriptionSelect = document.getElementById("expense-description");

  descriptionSelect.addEventListener("change", function() {
    const selectedOption = this.value;
    if (selectedOption === "Personalizada") {
      const customDescription = prompt("Digite a descrição personalizada:");
      if (customDescription) {
        const customOption = document.createElement("option");
        customOption.value = customDescription;
        customOption.text = customDescription;
        descriptionSelect.appendChild(customOption);
        descriptionSelect.value = customDescription;
      } else {
        descriptionSelect.value = "";
      }
    }
  });

  expenseDescriptionSelect.addEventListener("change", function() {
    const selectedOption = this.value;
    if (selectedOption === "Personalizada") {
      const customDescription = prompt("Digite a descrição personalizada:");
      if (customDescription) {
        const customOption = document.createElement("option");
        customOption.value = customDescription;
        customOption.text = customDescription;
        expenseDescriptionSelect.appendChild(customOption);
        expenseDescriptionSelect.value = customDescription;
      } else {
        expenseDescriptionSelect.value = "";
      }
    }
  });
  
});

// Função para adicionar uma transação
function addTransaction(description, amount) {
  const transaction = {
    description,
    amount,
    timestamp: new Date() // Adiciona a data e hora atual à transação
  };
  transactions.push(transaction);
}

// Função para adicionar uma despesa
function addExpense(description, amount) {
  const expense = {
    description,
    amount,
    timestamp: new Date() // Adiciona a data e hora atual à despesa
  };
  expenses.push(expense);
}


// Inicializa a página
initialize();
