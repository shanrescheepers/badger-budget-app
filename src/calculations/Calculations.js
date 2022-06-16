export const calculateTax = (gross) => {
    var yearlyGross = gross * 12;
    var taxDiff = 0;
    var taxAmount = 0;

    if (yearlyGross <= 226000) {
        // tax bracket
        taxAmount = yearlyGross * 0.18;
    } else if (yearlyGross <= 353100) {
        // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
        taxDiff = yearlyGross - 226000;
        taxDiff = taxDiff * 0.26;
        taxAmount = taxDiff + 40680;
    } else if (yearlyGross <= 488700) {
        // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
        taxDiff = yearlyGross - 353101;
        taxDiff = taxDiff * 0.31;
        taxAmount = taxDiff + 73726;
    } else if (yearlyGross <= 641400) {
        // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
        taxDiff = yearlyGross - 488700;
        taxDiff = taxDiff * 0.36;
        taxAmount = taxDiff + 115762;
    } else if (yearlyGross <= 817600) {
        // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
        taxDiff = yearlyGross - 641400;
        taxDiff = taxDiff * 0.39;
        taxAmount = taxDiff + 170734;
    } else if (yearlyGross <= 1731600) {
        // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
        taxDiff = yearlyGross - 817600;
        taxDiff = taxDiff * 0.41;
        taxAmount = taxDiff + 239452;
    } else {
        taxDiff = yearlyGross - 1731600;
        taxDiff = taxDiff * 0.45;
        taxAmount = taxDiff + 614192;
    }

    return Math.round(taxAmount / 12 * 100) / 100
}

export const calculateTaxBracket = (gross) => {

    if (gross == null) {
        return 0;
    }

    const yearlyGross = gross * 12;

    if (yearlyGross <= 226000) {
        return 'Category 1';
    } else if (yearlyGross <= 353100) {
        return 'Category 2';
    } else if (yearlyGross <= 488700) {
        return 'Category 3';
    } else if (yearlyGross <= 641400) {
        return 'Category 4';
    } else if (yearlyGross <= 817600) {
        return 'Category 5';
    } else if (yearlyGross <= 1731600) {
        return 'Category 6';
    } else {
        return 'Category 7';
    }
}

export const calculateNet = (gross, taxAmount) => {
    return gross - taxAmount;
}

export const calculateExpenseLumpTotal = (expenses) => {
    let totalLumpExpense = 0;
    expenses.forEach(expense => {
        totalLumpExpense += expense.expenseTotal;
    });

    return totalLumpExpense;
}