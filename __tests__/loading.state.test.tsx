import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom for additional matchers
import { LoadingGlobal } from '../components/loading-global';

describe('LoadingGlobal', () => {
  it('displays the LoadingGlobal component with Rive animation', () => {
    // Render the LoadingGlobal component
    const { getByText } = render(<LoadingGlobal />);
    
    // Assert that the loading animation (SVG) is displayed
    const loadingAnimation = document.getElementsByClassName('loading-svg')[0];
    expect(loadingAnimation).toBeInTheDocument();

    // Assert that the text is displayed
    const loadingText = getByText('Generating your colorpalette ...');
    expect(loadingText).toBeInTheDocument();
  });
});
