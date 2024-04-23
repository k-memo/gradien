import React, { useState } from "react";
import { ImageColorPicker } from "react-image-color-picker";
import image from "./rado.png";
import { CgColorPicker } from "react-icons/cg";


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
      <h3>Pick your colors</h3>

      <ImageColorPicker
        onColorPick={handleColorPick}

        imgSrc={"./rado.png"}
        zoom={1}
      />

      <form onSubmit={onSubmit}>
        <div className="picked-colors">
          <div className="color-input">
            <div className="color-square" style={{ backgroundColor: eyeColor }} />
            <input
              type="text"
              name="eyeColor"
              onClick={() => setCurrentPart("eye")}
              value={eyeColor}
              readOnly
            /><CgColorPicker className="picker" onClick={() => setCurrentPart("eye")} />
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
            <CgColorPicker className="picker" onClick={() => setCurrentPart("hair")}/>
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
            <CgColorPicker className="picker" onClick={() => setCurrentPart("skin")} />
          </div>    
        </div>
        <div className="submit-area">
          <a className="prev-btn btn">Previous</a>
          <button type="submit" className="btn-main btn">Submit</button>
        </div>
      </form>
    </main>
  );
}
