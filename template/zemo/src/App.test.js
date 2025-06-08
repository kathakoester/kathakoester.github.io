import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Zemo Plakson text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Zemo Plakson/i);
  expect(linkElement).toBeInTheDocument();
});
