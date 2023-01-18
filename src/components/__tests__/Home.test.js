import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';

describe('Welcome component', () => {
  test('renders Welcome to our page component', () => {
    render(<Home />);

    const welcomeElement = screen.getByText('Welcome', { exact: false });
    expect(welcomeElement).toBeInTheDocument();
  });
});
