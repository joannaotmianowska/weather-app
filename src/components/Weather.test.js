import { render, screen } from '@testing-library/react';
import Weather from './Weather';

test('renders weather comp', () => {
  render(<Weather />);
  const linkElement = screen.getByText(/this is weather component/i);
  expect(linkElement).toBeInTheDocument();
});
