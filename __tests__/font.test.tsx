import Page from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Page Component', () => {
  it('renders the heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it('redirects when the "Get Started" button is clicked', () => {
    render(<Page />);

    const getStartedButton = screen.getByText('Get Started');
    fireEvent.click(getStartedButton);

    expect(window.location.pathname).toBe('/');
  });

  it('applies the expected styles to the heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveStyle({ fontSize: '1.5em' });
  });
});
