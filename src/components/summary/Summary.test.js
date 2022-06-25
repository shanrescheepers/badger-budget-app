import { render, screen } from '@testing-library/react';
import Summary from './Summary';
// RTL
test('Check if income component renders', () => {
    render(<Summary />);
    const summaryTotalHeading = screen.getByRole('summaryTotal');

    expect(summaryTotalHeading).toBeInTheDocument();
    expect(summaryTotalHeading).toBeVisible();
});