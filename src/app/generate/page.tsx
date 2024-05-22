'use client';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import ColorPickerForm from '../../../components/color-picker-form';
import ImageUploadField from '../../../components/image-upload-field';
import NavForm from '../../../components/nav-form';
import { IPalette } from '../../../models/colorpalette.interface';
import { LoadingGlobal } from '../../../components/loading-global';
import SwiperContainer from '../../../components/swiper-container';

export default function Home() {
  const [formStep, setFormStep] = useState(0);
  const [colorpalette, setPalette] = useState<IPalette>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const imageUploadRef = useRef(null);
  const [imageSrcFromChild, setImageSrcFromChild] = React.useState();
  const childRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevStep = () => {
    setFormStep(prevStep => Math.max(prevStep - 1, 0));
  };

  const handleNextStep = () => {
    setFormStep(prevStep => prevStep + 1);
  };

  const getColor = (index: number) => {
    setActiveIndex(index);
    const swiperElement = document.querySelector(
      '.mySwiper',
    ) as HTMLElement | null;

    const swiper = (swiperElement as any)?.swiper;
    swiper?.slideTo(index);
  };
  return (
    <main className="multi-step">
      <NavForm formStep={formStep} setFormStep={setFormStep} />

      <div className="multi-step-item">
        {isLoading === true && <LoadingGlobal />}
        {formStep === 0 && (
          <section id="upload-section" data-testid="upload-section">
            <ImageUploadField
              ref={imageUploadRef}
              setImageSrcFromChild={setImageSrcFromChild as any} // Pass down the function to update the image source
            />
          </section>
        )}

        {formStep === 1 && (
          <section
            className="color-picker-section"
            data-testid="color-picker-section"
          >
            <ColorPickerForm
              imgSrc={imageSrcFromChild}
              setPalette={setPalette}
              setLoading={setIsLoading}
              setFormStep={setFormStep}
              handlePrevStep={handlePrevStep}
            />
          </section>
        )}

        {formStep === 2 && (
          <section className="palette-section" data-testid="palette-section">
            <SwiperContainer
              colorpalette={colorpalette}
              activeIndex={activeIndex}
              getColor={getColor}
            />
          </section>
        )}
      </div>

      <div className="bottom-nav">
        {formStep == 2 && (
          <input
            type="button"
            value=" "
            style={{ visibility: 'hidden' }}
            disabled
          />
        )}
        {formStep === 0 && (
          <>
            <input
              type="button"
              value=" "
              style={{ visibility: 'hidden' }}
              disabled
            />
            <input
              className={`btn-main btn ${imageSrcFromChild === undefined ? 'disabled' : ''}`}
              type="button"
              value="Next"
              onClick={handleNextStep}
              data-testid="generate-next"
              disabled={imageSrcFromChild === undefined}
            />
          </>
        )}
      </div>
    </main>
  );
}
