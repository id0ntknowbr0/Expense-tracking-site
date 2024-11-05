
const incomeCategories = ["Salary", "Gift", "Investments", "Freelancing","Savings","MrBeast challenge","Miscelianeous"];
const expenseCategories = ["Food & Beverage", "Rent", "Transport", "Entertainment","Gifts","EMI","Shopping","Miscelianeous"];

let transactions = [];
let totalIncome = 0;
let totalExpense = 0;

const typeSelect = document.getElementById("type-select");
const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const transactionsTableBody = document.getElementById("transactions-table-body");
const totalIncomeCell = document.getElementById("total-income");
const totalExpenseCell = document.getElementById("total-expense");

// Populate categories based on selected type
function updateCategories() {
    const selectedType = typeSelect.value;
    categorySelect.innerHTML = "";

    const categories = selectedType === "Income" ? incomeCategories : expenseCategories;
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Event listener for type select change
typeSelect.addEventListener("change", updateCategories);

// Add transaction
addBtn.addEventListener("click", () => {
    const type = typeSelect.value;
    const category = categorySelect.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    if (!amount || amount <= 0 || !date) {
        alert("Please enter valid amount and date.");
        return;
    }

    const transaction = { type, category, amount, date };
    transactions.push(transaction);

    if (type === "Income") {
        totalIncome += amount;
        totalIncomeCell.textContent = `₹${totalIncome}`;
    } else {
        totalExpense += amount;
        totalExpenseCell.textContent = `₹${totalExpense}`;
    }

    // Add transaction to the table
    const newRow = transactionsTableBody.insertRow();
    newRow.innerHTML = `
        <td>${type}</td>
        <td>${category}</td>
        <td>₹${amount.toFixed(2)}</td>
        <td>${date}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Delete transaction on button click
    newRow.querySelector(".delete-btn").addEventListener("click", () => {
        transactionsTableBody.removeChild(newRow);
        transactions = transactions.filter(t => t !== transaction);
        if (type === "Income") {
            totalIncome -= amount;
            totalIncomeCell.textContent = `₹${totalIncome}`;
        } else {
            totalExpense -= amount;
            totalExpenseCell.textContent = `₹${totalExpense}`;
        }
    });

    // Reset inputs
    amountInput.value = "";
    dateInput.value = "";
});

// Initialize categories on load
updateCategories();

