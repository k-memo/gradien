import React from 'react';
import { render } from '@testing-library/react';
import { LoadingGlobal } from '../components/loading-global';
import '@testing-library/jest-dom';

// Mock the Rive component
jest.mock('@rive-app/react-canvas', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => <div className="mocked-rive" />),
}));

describe('LoadingGlobal', () => {
  it('displays the LoadingGlobal component with Rive animation', () => {
    // Render the LoadingGlobal component
    const { getByText } = render(<LoadingGlobal />);

    // Assert that the mocked Rive component is rendered
    const mockedRiveComponent =
      document.getElementsByClassName('mocked-rive')[0];
    expect(mockedRiveComponent).toBeInTheDocument();

    // Assert that the text is displayed
    const loadingText = getByText('Generating your colorpalette ...');
    expect(loadingText).toBeInTheDocument();
  });
});
