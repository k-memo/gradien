import Page from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';

// Mock the useSession hook
jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  useSession: jest.fn(),
}));

describe('Index', () => {
  // Mock the session data
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { name: 'admin' },
  };

  (useSession as jest.Mock).mockReturnValueOnce([mockSession, 'authenticated']);
  it('renders the heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
