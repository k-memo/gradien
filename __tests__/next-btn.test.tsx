import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '@/app/generate/page';

describe('Page Component', () => {
  it('should not display the "Next" button at form step 2', () => {
    render(<Page />);

    // Check if we're at form step 2
    const formStep2Element = screen.getByTestId('palette-section');
    expect(formStep2Element).toBeInTheDocument();

    // Ensure that the "Next" button is not visible
    const nextButton = screen.queryByRole('button', { name: 'Next' });
    expect(nextButton).not.toBeInTheDocument();
  });
});
