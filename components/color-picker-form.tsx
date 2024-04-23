import React, { useState } from "react";
import { ImageColorPicker } from "react-image-color-picker";
import image from "./rado.png";

export default function ColorPickerForm() {
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`eyeColor = ${eyeColor}`);
    console.log(`hairColor = ${hairColor}`);
    console.log(`skinColor = ${skinColor}`);
  };

  return (
    <main className="color-picker-page">
      <h1>Pick your colors</h1>

      <ImageColorPicker
        onColorPick={handleColorPick}
        imgSrc={"./rado.png"}
        zoom={1}
      />

      <form onSubmit={onSubmit}>
        <div className="color-input">
          <div className="color-square" style={{ backgroundColor: eyeColor }} />
          <input
            type="text"
            name="eyeColor"
            onClick={() => setCurrentPart("eye")}
            value={eyeColor}
            readOnly
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
            onClick={() => setCurrentPart("hair")}
            value={hairColor}
            readOnly
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
            onClick={() => setCurrentPart("skin")}
            value={skinColor}
            readOnly
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
