import { render, screen } from '@testing-library/react';
import Income from './Income'

test('Add button rendered', () => {
    render(<Income />);
    const addButtonElement = screen.getByText("ADD");
    expect(addButtonElement).toBeInTheDocument();
    expect(addButtonElement).not.toBeDisabled();
    expect(addButtonElement).toBeVisible();
});

test('Input form', () => {
    render(<Income />);
    const nameInput = screen.getByPlaceholderText("Name");
    const surnameInput = screen.getByPlaceholderText("Surname");
    const amountInput = screen.getByPlaceholderText("Gross Salary");
    const savePercentage = screen.getByPlaceholderText("Select Saving %");

    expect(nameInput).toHaveValue('');
    expect(surnameInput).toHaveValue('');
    expect(amountInput).toHaveValue('');
    expect(savePercentage).toHaveValue('DEFAULT');

})