// Variáveis para armazenar dados das transações e despesas
let transactions = [];
let expenses = [];

// Selecionar elementos HTML
const transactionList = document.getElementById('transaction-list');
const transactionForm = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const incomeDisplay = document.getElementById('income-value');
const expenseDisplay = document.getElementById('expense-value');
const balanceDisplay = document.getElementById('balance-value');
const expenseList = document.getElementById('expense-list');
const expenseForm = document.getElementById('expense-form');
const expenseDescriptionInput = document.getElementById('expense-description');
const expenseAmountInput = document.getElementById('expense-amount');

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
  transactions.forEach(transaction => {
    const listItem = document.createElement('div');
    listItem.classList.add('transaction-item');
    listItem.innerHTML = `
      <p>${transaction.description}</p>
      <p>${formatCurrency(transaction.amount)}</p>
    `;
    transactionList.appendChild(listItem);
  });
}

// Função para exibir as despesas na lista
function displayExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach(expense => {
    const listItem = document.createElement('div');
    listItem.classList.add('transaction-item');
    listItem.innerHTML = `
      <p>${expense.description}</p>
      <p>${formatCurrency(expense.amount)}</p>
    `;
    expenseList.appendChild(listItem);
  });
}

// Função para atualizar o resumo financeiro
function updateSummary() {
  let income = 0;
  let expense = 0;
  transactions.forEach(transaction => {
    if (transaction.amount > 0) {
      income += transaction.amount;
    } else {
      expense -= transaction.amount;
    }
  });

  incomeDisplay.textContent = formatCurrency(income);
  expenseDisplay.textContent = formatCurrency(expense);
  balanceDisplay.textContent = formatCurrency(income - expense);
}

// Função para formatar valores monetários
function formatCurrency(value) {
  return `R$ ${value.toFixed(2)}`;
}

// Evento de envio do formulário de transação
transactionForm.addEventListener('submit', e => {
  e.preventDefault();

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (description.trim() !== '' && !isNaN(amount)) {
    addTransaction(description, amount);
    displayTransactions();
    updateSummary();

    // Limpar campos do formulário
    descriptionInput.value = '';
    amountInput.value = '';
  }
});

// Evento de envio do formulário de despesa
expenseForm.addEventListener('submit', e => {
  e.preventDefault();

  const description = expenseDescriptionInput.value;
  const amount = parseFloat(expenseAmountInput.value);

  if (description.trim() !== '' && !isNaN(amount)) {
    addExpense(description, -amount);
    displayExpenses();
    updateSummary();

    // Limpar campos do formulário
    expenseDescriptionInput.value = '';
    expenseAmountInput.value = '';
  }
});

// Inicializar o site exibindo as transações, despesas e o resumo
displayTransactions();
displayExpenses();
updateSummary();

// ...

// Função para adicionar uma despesa
function addExpense(description, amount) {
    const expense = {
      description,
      amount
    };
    expenses.push(expense);
  }
  
  // Função para exibir as despesas na lista
  function displayExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
      const listItem = document.createElement('div');
      listItem.classList.add('transaction-item');
      listItem.innerHTML = `
        <p>${expense.description}</p>
        <p>${formatCurrency(expense.amount)}</p>
      `;
      expenseList.appendChild(listItem);
    });
  }
  
  // Função para atualizar o resumo financeiro
  function updateSummary() {
    let income = 0;
    let expense = 0;
  
    transactions.forEach(transaction => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });
  
    expenses.forEach(expenseItem => {
      expense += expenseItem.amount;
    });
  
    incomeDisplay.textContent = formatCurrency(income);
    expenseDisplay.textContent = formatCurrency(expense);
    balanceDisplay.textContent = formatCurrency(income - Math.abs(expense)); // Subtrai o valor absoluto das despesas da receita
  
    // Adicionei um tratamento para exibir o saldo em vermelho caso seja negativo
    if (income - Math.abs(expense) < 0) {
      balanceDisplay.style.color = 'red';
    } else {
      balanceDisplay.style.color = 'black';
    }
  }
  
  // ...
  
  // Evento de envio do formulário de despesa
  expenseForm.addEventListener('submit', e => {
    e.preventDefault();
  
    const description = expenseDescriptionInput.value;
    const amount = parseFloat(expenseAmountInput.value);
  
    if (description.trim() !== '' && !isNaN(amount)) {
      addExpense(description, -amount); // Subtrai o valor da despesa da receita
      displayExpenses();
      updateSummary();
  
      // Limpar campos do formulário
      expenseDescriptionInput.value = '';
      expenseAmountInput.value = '';
    }
  });
  
 // Função para exibir as transações na lista
function displayTransactions() {
  transactionList.innerHTML = '';
  transactions.forEach(transaction => {
    const listItem = document.createElement('div');
    listItem.classList.add('transaction-item');
    listItem.innerHTML = `
      <p>${transaction.description}</p>
      <p class="${transaction.amount > 0 ? 'income' : 'expense'}">${formatCurrency(transaction.amount)}</p>
    `;
    transactionList.appendChild(listItem);
  });
}

// Função para exibir as despesas na lista
function displayExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach(expense => {
    const listItem = document.createElement('div');
    listItem.classList.add('transaction-item');
    listItem.innerHTML = `
      <p>${expense.description}</p>
      <p class="expense">${formatCurrency(expense.amount)}</p>
    `;
    expenseList.appendChild(listItem);
  });
}

document.getElementById("description").addEventListener("change", function() {
  var descriptionInput = document.getElementById("custom-description-input");
  if (this.value === "Outros") {
    descriptionInput.disabled = false;
    descriptionInput.setAttribute("required", "required");
  } else {
    descriptionInput.disabled = true;
    descriptionInput.removeAttribute("required");
  }
});

document.getElementById("expense-description").addEventListener("change", function() {
  var expenseDescriptionInput = document.getElementById("custom-expense-description-input");
  if (this.value === "Descrição Personalisada") {
    expenseDescriptionInput.disabled = false;
    expenseDescriptionInput.setAttribute("required", "required");
  } else {
    expenseDescriptionInput.disabled = true;
    expenseDescriptionInput.removeAttribute("required");
  }
});


function showCustomDescription() {
  var descriptionSelect = document.getElementById("description");
  var customDescriptionInput = document.getElementById("custom-description-input");

  if (descriptionSelect.value === "Outros") {
    var customDescription = prompt("Digite a descrição personalizada:");
    if (customDescription) {
      var option = document.createElement("option");
      option.value = customDescription;
      option.text = customDescription;
      descriptionSelect.add(option);
      descriptionSelect.value = customDescription;
      customDescriptionInput.value = customDescription;
    } else {
      descriptionSelect.value = "";
      customDescriptionInput.value = "";
    }
  } else {
    customDescriptionInput.value = descriptionSelect.value;
  }
}