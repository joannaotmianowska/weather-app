import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather comp', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is weather component/i);
  expect(linkElement).toBeInTheDocument();
});
