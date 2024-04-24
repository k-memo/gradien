"use client";
import { CiExport } from "react-icons/ci";
import NavForm from "../../../components/nav-form";
import { FaRegImage } from "react-icons/fa6";
import { FiCamera, FiSave } from "react-icons/fi";
import ColorPickerForm from "../../../components/color-picker-form";
import { useState } from "react";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import ShowMore from "../../../components/showmore"


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
      <NavForm formStep={formStep} setFormStep={setFormStep} />

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
            <div className="palette-heading">
              <h2>Your Colorpalette</h2>
          
            </div>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            <div className="name">
                <label>Palettename:</label>
                <input className="palette-name" />
              </div>
            <div className="palette">
              <div className="palette-color p1"></div>
              <div className="palette-color p2"></div>
              <div className="palette-color p3"></div>
              <div className="palette-color p4"></div>
              <div className="palette-color p5"></div>
              <div className="palette-color p6"></div>
              <div className="palette-color p7"></div>
            </div>

            <div className="explanation">
              <ShowMore/>
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
