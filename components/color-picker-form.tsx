import React, { useState } from 'react';
import { ImageColorPicker } from 'react-image-color-picker';
import { CgColorPicker } from 'react-icons/cg';

export default function ColorPickerForm({
  imgSrc,
  setPalette,
  setLoading,
  setFormStep,
}) {
  const [currentPart, setCurrentPart] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [skinColor, setSkinColor] = useState('');

  const handleColorPick = color => {
    switch (currentPart) {
      case 'eye':
        setEyeColor(color);
        document.body.style.cursor = 'default';
        break;
      case 'hair':
        setHairColor(color);
        document.body.style.cursor = 'default';
        break;
      case 'skin':
        setSkinColor(color);
        document.body.style.cursor = 'default';
        break;
      default:
        break;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    const color = {
      eyeColor: rgbToHex(eyeColor),
      hairColor: rgbToHex(hairColor),
      skinColor: rgbToHex(skinColor),
    };

    try {
      const response = await fetch('/api/generatePalette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ color: color }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit colors');
      }

      const responseBodyText = await response.text();

      const responseData = JSON.parse(responseBodyText);
      setPalette(responseData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setFormStep(2);
    }
  };

  function rgbToHex(rgb: string): string {
    // Extracting the RGB values from the string
    const [r, g, b] = rgb.match(/\d+/g)?.map(Number) || [];

    // Converting RGB to hex
    const hex = ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

    return `#${hex}`;
  }

  return (
    <div className="color-picker-page">
     

      <ImageColorPicker
        onColorPick={handleColorPick}
        imgSrc={imgSrc}
        zoom={3}
      />

      <form onSubmit={onSubmit}>
        <div className="picked-colors">
          <div className="color-div">
            <label>Eye Color:</label>
            <div className="color-input">
              <div
                className="color-square"
                style={{ backgroundColor: eyeColor }}
              />
              <input
                type="text"
                name="eyeColor"
                placeholder='eye color'
                onClick={() => {
                  setCurrentPart('eye');
                }}
                value={eyeColor}
                readOnly
              />
              <CgColorPicker
                className="picker"
                onClick={() => {
                  document.body.style.cursor = 'crosshair';
                  setCurrentPart('eye');
                }}
              />
            </div>
          </div>
          <div className="color-div">
            <label>Hair Color:</label>
            <div className="color-input">
              <div
                className="color-square"
                style={{ backgroundColor: hairColor }}
              />
              <input
                type="text"
                name="hairColor"
                placeholder='hair color'
                value={hairColor}
                onClick={() => setCurrentPart('hair')}
                readOnly
              />
              <CgColorPicker
                className="picker"
                onClick={() => {
                  document.body.style.cursor = 'crosshair';
                  setCurrentPart('hair');
                }}
              />
            </div>
          </div>
          <div className="color-div">
            <label>Skin Color:</label>
            <div className="color-input">
              <div
                className="color-square"
                style={{ backgroundColor: skinColor }}
              />
              <input
                type="text"
                name="skinColor"
                placeholder='skin color'
                value={skinColor}
                onClick={() => setCurrentPart('skin')}
                readOnly
              />
              <CgColorPicker
                className="picker"
                onClick={() => {
                  document.body.style.cursor = 'crosshair';
                  setCurrentPart('skin');
                }}
              />
            </div>
          </div>
        </div>
        <div className="submit-area">
          <a className="prev-btn btn">Previous</a>
          <button type="submit" className="btn-main btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
