import { calculateExpenseLumpTotal } from "../../calculations/Calculations";

describe("Test total expense calculation (LUMP)", function () {
    var sampleExpenses;
    var expectedTotal;

    beforeEach(function () {
        sampleExpenses = [
            {
                expenseTotal: 12
            },
            {
                expenseTotal: 59
            },
            {
                expenseTotal: 29
            }
        ];
        expectedTotal = 100;
    })

    it("Expense calculation positive test", function () {
        var calculatedTotal = calculateExpenseLumpTotal(sampleExpenses);

        expect(calculatedTotal).toBe(expectedTotal);
    });

    it("Expense calculation negative test", function () {
        var calculatedTotal = calculateExpenseLumpTotal(sampleExpenses);

        expect(calculatedTotal).not.toBe(expectedTotal + 10);
    });
})