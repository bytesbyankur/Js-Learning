let expense = [];

let descriptionInput = document.getElementById('descriptionInput');
let amountInput = document.getElementById('amountInput');
let addBtn = document.getElementById('addBtn');
let resultDiv = document.querySelector('.resultCard');
let emptyMsg = document.querySelector('.emptymsg');

function loadExpenses() {
  let Storedexpense = JSON.parse(localStorage.getItem('expenses')) || [];
  displayExpenses(Storedexpense);
  calculateTotal(Storedexpense);
}

function saveExpense(description, amount) {
  let storedexpense = JSON.parse(localStorage.getItem('expenses')) || [];
  storedexpense.push({ description, amount });
  localStorage.setItem('expenses', JSON.stringify(storedexpense));
}

function displayExpenses(expenses) {
  resultDiv.innerHTML = '';
  if (expenses.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
    expenses.forEach((expense, index) => {
      let expenseElement = document.createElement('div');
      expenseElement.className = 'expense-item';
      expenseElement.innerHTML = `
        <strong class="description">${expense.description}</strong> - Rs ${parseFloat(expense.amount).toFixed(2)}
        <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
      `;
      resultDiv.appendChild(expenseElement);
    });

    const totalDiv = document.createElement('div');
    totalDiv.className = 'total';
    totalDiv.innerHTML = `Total: Rs <span id="totalAmount">0.00</span>`;
    resultDiv.appendChild(totalDiv);

    resultDiv.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', event => {
        const index = parseInt(event.target.dataset.index, 10);
        deleteExpense(index);
      });
    });
  }
}

addBtn.addEventListener('click', () => {
  let description = descriptionInput.value.trim();
  let amount = parseFloat(amountInput.value.trim());
  if (description && !isNaN(amount)) {
    saveExpense(description, amount);
    loadExpenses();
    descriptionInput.value = '';
    amountInput.value = '';
  } else {
    alert('Please enter a valid description and amount.');
  }
});

// Call this when the page loads
window.addEventListener('DOMContentLoaded', () => {
  loadExpenses();
});

function calculateTotal(expenses) {
  const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
  const totalElement = document.getElementById('totalAmount');
  if (totalElement) {
    totalElement.textContent = total.toFixed(2);
  }
}

function deleteExpense(index) {
  let storedexpense = JSON.parse(localStorage.getItem('expenses')) || [];
  storedexpense.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(storedexpense));
  loadExpenses();
}
