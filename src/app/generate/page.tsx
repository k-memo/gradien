'use client';
import React, { useRef, useState } from 'react';
import { CiExport } from 'react-icons/ci';
import { FiSave } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ColorPickerForm from '../../../components/color-picker-form';
import ImageUploadField from '../../../components/image-upload-field';
import NavForm from '../../../components/nav-form';
import ShowMore from '../../../components/showmore';
import { IPalette } from '../../../models/colorpalette.interface';
import Logo from '../../../components/logo';
import { LoadingGlobal } from '../../../components/loading-global';

export default function Home() {
  const [formStep, setFormStep] = useState(0);
  const [colorpalette, setPalette] = useState<IPalette>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const imageUploadRef = useRef(null);
  const [imageSrcFromChild, setImageSrcFromChild] = React.useState('');

  const handlePrevStep = () => {
    setFormStep(prevStep => Math.max(prevStep - 1, 0));
  };

  const handleNextStep = () => {
    setFormStep(prevStep => prevStep + 1);
  };

  const childRef = useRef(null);

  return (
    <main className="multi-step">
      <NavForm formStep={formStep} setFormStep={setFormStep} />

      <div className="multi-step-item">
        {isLoading === true && <LoadingGlobal />}
        {formStep === 0 && (
          <section className="upload-section">
            <ImageUploadField
              ref={imageUploadRef}
              setImageSrcFromChild={setImageSrcFromChild} // Pass down the function to update the image source
            />
          </section>
        )}

        {formStep === 1 && (
          <section className="color-picker-section">
            <ColorPickerForm
              imgSrc={imageSrcFromChild}
              setPalette={setPalette}
              setLoading={setIsLoading}
              setFormStep={setFormStep}
            />
          </section>
        )}

        {formStep === 2 && (
          <section className="palette-section">
            <div className="palette-heading">
              <Logo />
              <h3>Your Colorpalette</h3>
            </div>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {colorpalette?.colors.map(color => (
                <SwiperSlide
                  key={color.name}
                  style={{ backgroundColor: color.hex }}
                  
                >
                  {color.name}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="palette">
              {colorpalette?.colors.map(color => (
                <div
                  key={color.name}
                  className="palette-color"
                  style={{ backgroundColor: color.hex }}
                ></div>
              ))}
            </div>
            <div className="explanation">
              <ShowMore />
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
