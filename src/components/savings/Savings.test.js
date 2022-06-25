import { render, screen } from '@testing-library/react';
import Savings from './Savings';
// RTL
test('Check if income component renders', () => {
    render(<Savings />);
    const totalSavingsHeading = screen.getByRole('savingsTotal');

    expect(totalSavingsHeading).toBeInTheDocument();
    expect(totalSavingsHeading).toBeVisible();
});