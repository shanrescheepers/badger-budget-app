import { render, screen } from '@testing-library/react';
import Bracket from './Bracket'
// RTL
test('Check if tax bracket element renders', () => {
    render(<Bracket />);
    const bracketSummaryElement = screen.getByRole('bracketCat');

    expect(bracketSummaryElement).toBeInTheDocument();
    expect(bracketSummaryElement).toBeVisible();
});