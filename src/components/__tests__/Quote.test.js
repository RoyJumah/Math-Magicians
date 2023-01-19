import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../Pages/Quote';

describe('Quote component', () => {
  test('renders random math quote as text', () => {
    render(<Quote />);

    const quoteEl = screen.getByText('math', { exact: false });
    expect(quoteEl).toBeInTheDocument();
  });
});
