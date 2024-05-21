import React, { useState } from 'react';
import { CgColorPicker } from 'react-icons/cg';
import { ImageColorPicker } from 'react-image-color-picker';
import { IerrorField } from '../models/errorField.interface';
import { IinputField } from '../models/inputField.interface';

export default function ColorPickerForm({
  imgSrc,
  setPalette,
  setLoading,
  setFormStep,
  handlePrevStep,
}) {
  const [currentPart, setCurrentPart] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [skinColor, setSkinColor] = useState('');

  const [fields, setField] = useState<IinputField[]>([]);
  const [errors, setErrors] = useState<IerrorField[]>([]);

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

  async function sendToGenerate() {
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
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const updatedFields: IinputField[] = [];

    // Iterate through form fields
    [...e.currentTarget.elements].forEach(field => {
      console.log(field.name);
      if (!field.name) return;

      updatedFields.push({ name: field.name, value: field.value });
    });

    setField(updatedFields);
    console.log(updatedFields); // Log updatedFields instead of fields

    // Check for Errors
    const newErrors: IerrorField[] = [];
    updatedFields.forEach(field => {
      const error = checkValidation(field);
      if (error) {
        newErrors.push(error);
      }
    });

    setErrors(newErrors);

    if (newErrors.length > 0) {
      console.warn(newErrors);
      return;
    }

    try {
      await sendToGenerate();
      setFormStep(2);
    } catch (error) {
      console.warn('Error:', error);
    }
  }

  function checkValidation(field: IinputField): IerrorField | undefined {
    if (field.value === '' && field.name !== 'hairColor') {
      console.warn(
        `Not valid: name: "${field.name}" with value: "${field.value}" `,
      );
      return { name: field.name, message: 'Required' };
    }
    return undefined;
  }

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
        zoom={1}
      />

      <form onSubmit={handleOnSubmit}>
        <h3>Pick your colors</h3>
        <p>
          Step by Step: Choose colors from your image. Start by selecting your
          eye color, followed by your hair color, and finally your skin tone.
          Once complete, submit your choices, and we&apos;ll generate your
          personalized color palette.
        </p>

        <div className="picked-colors">
          <div className="color-div">
            <label className={getErrorClass('skinColor')}>Skin Color:</label>
            <div className="color-input">
              <div
                className="color-square"
                style={{ backgroundColor: skinColor }}
              />
              <input
                type="text"
                name="skinColor"
                placeholder="skin color"
                role="text"
                value={skinColor}
                onClick={() => setCurrentPart('skin')}
                readOnly
                required
              />
              <CgColorPicker
                className="picker"
                role="img"
                onClick={() => {
                  document.body.style.cursor = 'crosshair';
                  setCurrentPart('skin');
                }}
              />
            </div>
          </div>
          <div className="color-div">
            <label className={getErrorClass('eyeColor')}>Eye Color:</label>
            <div className="color-input">
              <div
                className="color-square"
                style={{ backgroundColor: eyeColor }}
              />
              <input
                type="text"
                name="eyeColor"
                placeholder="eye color"
                onClick={() => {
                  setCurrentPart('eye');
                }}
                value={eyeColor}
                readOnly
                required
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
            <label className={getErrorClass('hairColor')}>
              Hair Color &#40;Optional&#41;:
            </label>
            <div className="color-input">
              <div
                className="color-square"
                style={{ backgroundColor: hairColor }}
              />
              <input
                type="text"
                name="hairColor"
                placeholder="hair color"
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
          {errors.some(
            error => error.name === 'skinColor' || error.name === 'eyeColor',
          ) && (
            <p className="label-error">
              You need to pick your skin and eye color.
            </p>
          )}
        </div>

        <div className="submit-area">
          <a className="prev-btn btn" onClick={handlePrevStep}>
            Previous
          </a>
          <button type="submit" className="btn-main btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  function getErrorClass(fieldName: string): string {
    return errors.some(error => error.name === fieldName) ? 'label-error' : '';
  }
}
