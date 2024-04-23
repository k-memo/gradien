"use client";
import { CiExport } from "react-icons/ci";
import { FaRegImage } from "react-icons/fa6";
import { FiCamera, FiSave } from "react-icons/fi";
import ColorPickerForm from "../../../components/color-picker-form";
import { useState } from "react";

export default function Home() {
  const [formStep, setFormStep] = useState(0);

  const handlePrevStep = () => {
    setFormStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleNextStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  return (
    <main className="multi-step">
      <nav>Navigation</nav>

      <div className="">
        {formStep === 0 && (
          <section className="upload-section">
            <h3>Upload Image</h3>
            <div className="input-container">
              <input className="img-input" />
              <div className="choose-option">
                <a className="btn-img">
                  <FiCamera />
                  Camera
                </a>
                <a className="btn-img" onClick={handleNextStep}>
                  <FaRegImage />
                  Gallery
                </a>
              </div>
            </div>
          </section>
        )}

        {formStep === 1 && (
          <section className="color-picker-section">
            <ColorPickerForm />
          </section>
        )}

        {formStep === 2 && (
          <section className="palette-section">
            <p>Logo</p>
            <h3>Your Colorpalette</h3>
            <div className="palette">
              {/* Render your palette colors here */}
            </div>
            <div className="name">
              <label>Palettename</label>
              <input className="palette-name" />
            </div>
            <div className="links">
              <a className="btn-second btn">
                export <CiExport className="link-icon" />
              </a>
              <a className="btn-main btn">
                save colorpalette
                <FiSave className="link-icon" />
              </a>
            </div>
          </section>
        )}
      </div>

      <div className="bottom-nav">
        {formStep > 0 && (
          <input
            className="prev-btn btn"
            type="button"
            value="Previous"
            onClick={handlePrevStep}
          />
        )}
        {formStep < 2 && (
          <input
            className="btn-main btn"
            type="button"
            value="Next"
            onClick={handleNextStep}
          />
        )}
      </div>
    </main>
  );
}
