import { calculateNet, calculateTaxBracket } from "../../calculations/Calculations";

describe("Income tax bracket category positive tests", function () {
    var taxBracket;
    var category = 1;

    beforeEach(function () {
        taxBracket = 'Category ' + category;
    })

    afterEach(function () {
        category = category + 1;
    })

    it("Category 1 positive test", function () {
        var calculatedBracket = calculateTaxBracket(5000);

        expect(calculatedBracket).toBe(taxBracket);
    });

    it("Category 2 positive test", function () {
        var calculatedBracket = calculateTaxBracket(20000);

        expect(calculatedBracket).toBe(taxBracket);

    });

    it("Category 3 positive test", function () {
        var calculatedBracket = calculateTaxBracket(30000);

        expect(calculatedBracket).toBe(taxBracket);
    });

    it("Category 4 positive test", function () {
        var calculatedBracket = calculateTaxBracket(50000);

        expect(calculatedBracket).toBe(taxBracket);
    });

    it("Category 5 positive test", function () {
        var calculatedBracket = calculateTaxBracket(60000);

        expect(calculatedBracket).toBe(taxBracket);
    });

    it("Category 6 positive test", function () {
        var calculatedBracket = calculateTaxBracket(80000);

        expect(calculatedBracket).toBe(taxBracket);
    });

    it("Category 7 positive test", function () {
        var calculatedBracket = calculateTaxBracket(200000);

        expect(calculatedBracket).toBe(taxBracket);
    });
});

describe("Income tax bracket category negative tests", function () {
    var taxBracket;
    var category = 1;

    beforeEach(function () {
        taxBracket = 'Category ' + category;
    })

    afterEach(function () {
        category = category + 1;
    })

    it("Category 1 negative test", function () {
        var calculatedBracket = calculateTaxBracket(80000);

        expect(calculatedBracket).not.toBe(taxBracket);
    });
});

describe("Income tax bracket null tests", function () {
    expect(calculateTaxBracket(null)).toBe(0);
});

describe("Test NET calculations", function () {
    var sampleIncome;
    var sampleTaxAmount;

    beforeEach(function () {
        sampleIncome = 10000;
        sampleTaxAmount = 2000;
    })

    it("Net salary postive test", function () {
        var calculatedNetSalary = calculateNet(sampleIncome, sampleTaxAmount);

        expect(calculatedNetSalary).toBe(8000);
    });
})

