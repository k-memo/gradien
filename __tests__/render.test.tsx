// Updated tests:

import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/app/page';

test('renders without crashing', () => {
  render(<Home />);
});

