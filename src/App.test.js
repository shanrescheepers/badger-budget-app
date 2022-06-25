import { render, screen } from '@testing-library/react';
import App from './App';
// RTL
test('Check if income component renders', () => {
  render(<App />);
  const incomeComponent = screen.getByRole('incomeComponent');

  expect(incomeComponent).toBeInTheDocument();
  expect(incomeComponent).toBeVisible();
});

test('Check if other components render', () => {
  render(<App />);
  const contentComponents = screen.getByRole('content');

  expect(contentComponents).toBeInTheDocument();
  expect(contentComponents).toBeVisible();
});
