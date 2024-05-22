import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ShowMore from '../components/showmore';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

describe('ShowMore Component', () => {
  it('should render arrow up when explanation is open', () => {
    const header = 'Test Header';
    const explanation = 'Test Explanation';

    render(<ShowMore header={header} explanation={explanation} />);

    const arrowButton = screen.getByRole('button', { name: /more/i });
    fireEvent.click(arrowButton);

    const arrowIcon = screen.getByTestId('arrow-icon');
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toEqual(<IoIosArrowUp />);
  });

  it('should toggle showMoreText state when button is clicked', () => {
    const header = 'Test Header';
    const explanation = 'Test Explanation';

    render(<ShowMore header={header} explanation={explanation} />);

    const arrowButton = screen.getByRole('button', { name: /more/i });
    fireEvent.click(arrowButton);
    expect(screen.getByText(explanation)).toBeInTheDocument();

    fireEvent.click(arrowButton);
    expect(screen.queryByText(explanation)).not.toBeInTheDocument();
  });

  it('should render arrow down when explanation is closed', () => {
    const header = 'Test Header';
    const explanation = 'Test Explanation';

    render(<ShowMore header={header} explanation={explanation} />);

    const arrowIcon = screen.getByTestId('arrow-icon');
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toEqual(<IoIosArrowDown />);
  });
});
