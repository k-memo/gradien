import React, { useState } from "react";
import { ImageColorPicker } from "react-image-color-picker";
import { CgColorPicker } from "react-icons/cg";

export default function ColorPickerForm({ imgSrc, setPalette }) {
  const [currentPart, setCurrentPart] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [skinColor, setSkinColor] = useState("");

  const handleColorPick = (color) => {
    switch (currentPart) {
      case "eye":
        setEyeColor(color);
        break;
      case "hair":
        setHairColor(color);
        break;
      case "skin":
        setSkinColor(color);
        break;
      default:
        break;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(`eyeColor = ${eyeColor}`);
    console.log(`hairColor = ${hairColor}`);
    console.log(`skinColor = ${skinColor}`);

    const color = {
      eyeColor: rgbToHex(eyeColor),
      hairColor: rgbToHex(hairColor),
      skinColor: rgbToHex(skinColor),
    };

    console.log(JSON.stringify({ color: color }));

    try {
      const response = await fetch("/api/generatePalette", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ color: color }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit colors");
      }

      const responseBodyText = await response.text();

      const responseData = JSON.parse(responseBodyText);
      setPalette(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  function rgbToHex(rgb: string): string {
    // Extracting the RGB values from the string
    const [r, g, b] = rgb.match(/\d+/g)?.map(Number) || [];

    // Converting RGB to hex
    const hex = ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

    return `#${hex}`;
  }

  return (
    <div className="color-picker-page">
      <h1>Pick your colors</h1>

      <ImageColorPicker
        onColorPick={handleColorPick}
        imgSrc={imgSrc}
        zoom={3}
      />

      <form onSubmit={onSubmit}>
        <div className="picked-colors">
          <div className="color-input">
            <div
              className="color-square"
              style={{ backgroundColor: eyeColor }}
            />
            <input
              type="text"
              name="eyeColor"
              onClick={() => setCurrentPart("eye")}
              value={eyeColor}
              readOnly
            />
            <CgColorPicker
              className="picker"
              onClick={() => setCurrentPart("eye")}
            />
          </div>
          <div className="color-input">
            <div
              className="color-square"
              style={{ backgroundColor: hairColor }}
            />
            <input
              type="text"
              name="hairColor"
              value={hairColor}
              onClick={() => setCurrentPart("hair")}
              readOnly
            />
            <CgColorPicker
              className="picker"
              onClick={() => setCurrentPart("hair")}
            />
          </div>
          <div className="color-input">
            <div
              className="color-square"
              style={{ backgroundColor: skinColor }}
            />
            <input
              type="text"
              name="skinColor"
              value={skinColor}
              onClick={() => setCurrentPart("skin")}
              readOnly
            />
            <CgColorPicker
              className="picker"
              onClick={() => setCurrentPart("skin")}
            />
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
