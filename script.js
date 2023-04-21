function calculateBudget(event) {
    event.preventDefault();

    let wage = document.getElementById("wage").value;
    let rent = document.getElementById("rent").value;

    if (!wage) {
        alert("Please enter your monthly wage.");
        return;
    }

    if (rent && isNaN(rent)) {
        alert("Please enter a valid rent amount.");
        return;
    }

    let totalBudget = parseFloat(wage);

    if (rent) {
        totalBudget -= parseFloat(rent);
    }

    let utilities = totalBudget * 0.05;
    let transportation = totalBudget * 0.04;
    let food = totalBudget * 0.25;
    let personalCare = totalBudget * 0.03;
    let clothing = totalBudget * 0.03;
    let entertainment = totalBudget * 0.10;
    let miscellaneous = totalBudget * 0.05;

    let result = `
        <h3>Your Monthly Budget</h3>
        <p>Total Budget: £${totalBudget.toFixed(2)}</p>
        <p>Housing: £${rent ? rent : 0}</p>
        <p>Utilities: £${utilities.toFixed(2)}</p>
        <p>Transportation: £${transportation.toFixed(2)}</p>
        <p>Food: £${food.toFixed(2)}</p>
        <p>Personal Care and Hygiene: £${personalCare.toFixed(2)}</p>
        <p>Clothing: £${clothing.toFixed(2)}</p>
        <p>Entertainment and Leisure: £${entertainment.toFixed(2)}</p>
        <p>Miscellaneous Expenses: £${miscellaneous.toFixed(2)}</p>
    `;

    document.getElementById("result").innerHTML = result;
}
