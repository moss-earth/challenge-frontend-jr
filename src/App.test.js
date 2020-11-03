import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page heading', () => {
  render(<App />);
  const mainHeading = screen.getByText(/nova ordem de compra/i);
  expect(mainHeading).toBeInTheDocument();
});
