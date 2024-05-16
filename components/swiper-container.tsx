import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Logo from './logo';
import ShowMore from './showmore';
import { CiExport } from 'react-icons/ci';
import { FiSave } from 'react-icons/fi';

const SwiperContainer = ({ colorpalette, activeIndex, getColor }) => {
  return (
    <div className="color-palette-div">
      <div className="palette-heading">
        <Logo />
        <h3>Your Colorpalette</h3>
      </div>
      <div className="palettes">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          initialSlide={activeIndex}
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
          {colorpalette?.colors.map((color, index) => (
            <div
              key={color.name}
              className="palette-color"
              style={{ backgroundColor: color.hex }}
              onClick={() => getColor(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="explanation">
        <ShowMore
          header="Colorpalette Info"
          explanation={colorpalette?.paletteInfo}
        />
      </div>
      <div className="links">
        <a className="btn-second btn">
          export
          <CiExport className="link-icon" />
        </a>
        <a className="btn-main btn">
          save colorpalette
          <FiSave className="link-icon" />
        </a>
      </div>
    </div>
  );
};

export default SwiperContainer;
