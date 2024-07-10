import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign Up heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/sign Up/i);
  expect(headingElement).toBeInTheDocument();
});
