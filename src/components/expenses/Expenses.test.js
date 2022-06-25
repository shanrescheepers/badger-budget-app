import { render, screen } from '@testing-library/react';
import Expenses from './Expenses'

test('Add button rendered', () => {
    render(<Expenses />);
    const addButtonElement = screen.getByText("ADD");
    expect(addButtonElement).toBeInTheDocument();
    expect(addButtonElement).not.toBeDisabled();
    expect(addButtonElement).toBeVisible();
});

test('Input form', () => {
    render(<Expenses />);
    const expenseName = screen.getByPlaceholderText("expense name");
    const totalInput = screen.getByPlaceholderText("expense total");

    expect(expenseName).toHaveValue('');
    expect(totalInput).toHaveValue('');
})

test('Expense Total Title Render', () => {
    render(<Expenses />);

    const expenseTotalTitle = screen.getByRole('totalExpense');

    expect(expenseTotalTitle).toBeVisible();

})