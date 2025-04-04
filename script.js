function calculateBalance() {
    const salary = parseFloat(document.getElementById('salary').value) || 0;
    const inputs = document.querySelectorAll('.categories input[type="number"]');
    let totalExpenses = 0;

    inputs.forEach(input => {
        totalExpenses += parseFloat(input.value) || 0;
    });

    const balance = salary - totalExpenses;
    document.getElementById('total-expenses').innerText = `Total Expenses: MYR ${totalExpenses.toFixed(2)}`;
    document.getElementById('balance').innerText = `Remaining Balance: MYR ${balance.toFixed(2)}`;
}
