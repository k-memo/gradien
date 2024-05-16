import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Page from '@/app/generate/page';

describe('Multistep Form', () => {
  it('should navigate through form steps correctly', async () => {
    render(<Page />);
    expect(screen.getByTestId('upload-section')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    await waitFor(() => {
      expect(screen.getByTestId('color-picker-section')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    await waitFor(() => {
      expect(screen.getByTestId('palette-section')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /previous/i }));
    await waitFor(() => {
      expect(screen.getByTestId('color-picker-section')).toBeInTheDocument();
    });
  });
});
