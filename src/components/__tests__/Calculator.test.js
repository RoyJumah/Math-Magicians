/* eslint-disable no-unused-vars */
import {
  cleanup, fireEvent, screen, render,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Pages/Calculator';

describe('Calculator', () => {
  afterEach(cleanup);

  it('renders calculator correctly', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  it('should fire click event for button 3', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    const answer = document.getElementsByClassName('answer');
  });

  it('should display 0 when AC is clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('AC'));
    const answer = document.getElementsByClassName('answer');
  });

  it('should display 1.1 ', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('1'));
    const answer = document.getElementsByClassName('answer');
  });
});
