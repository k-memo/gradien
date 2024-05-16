import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ColorPickerForm from '../components/color-picker-form'; 

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('ColorPickerForm', () => {
  it('selects a color when using the color picker', async () => {
    const setPalette = jest.fn();
    const setLoading = jest.fn();
    const setFormStep = jest.fn();
    const handlePrevStep = jest.fn();

    render(
      <ColorPickerForm
        imgSrc="./assets/CC0000.png"
        setPalette={setPalette}
        setLoading={setLoading}
        setFormStep={setFormStep}
        handlePrevStep={handlePrevStep}
      />
    )

    const pickerButtonscreen = screen.getByRole('img')
    fireEvent.click(pickerButtonscreen);

    const testImg = screen.getByTestId('image-color-pick-canvas')
    fireEvent.click(testImg);

const skincolorInput = screen.getByRole('text'/*, {name: 'skinColor'}*/)

    expect((skincolorInput as any).value).toBe('#CC0000');
  });
});
