import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Logo from './logo';
import ShowMore from './showmore';
import { CiExport } from 'react-icons/ci';
import { FiSave } from 'react-icons/fi';
import prisma from '../lib/prisma';
import { IPalette } from '../models/colorpalette.interface'; // Import IPalette interface

const SwiperContainer = ({ colorpalette, activeIndex, getColor }: { colorpalette: IPalette, activeIndex: number, getColor: (index: number) => void }) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const userEmail = 'user@test.com'; 
      setUserEmail(userEmail);
    };

    fetchUserEmail();
  }, []);

  
  const saveColorPalette = async (palette: IPalette) => {
    if (!userEmail) return; 

    try {

      await prisma.palette.create({
        data: {
          name: 'xxxxxx', 
          description: 'xxxxxxx',
          palleteJson: palette,
        },
      });

      console.log('Color palette saved successfully!');
    } catch (error) {
      console.error('Error saving color palette:', error);
    }
  };



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
      <div className="showmore">
        <div className="explanation">
          <ShowMore
            header="Colorpalette Info"
            explanation={
              colorpalette?.paletteInfo + colorpalette?.userColorDisposition
            }
          />
        </div>
      </div>
      <div className="links">
   
        <a className="btn-main btn" onClick={() => saveColorPalette(colorpalette)}>
          Save color palette
          <FiSave className="link-icon" />
        </a>
      </div>
    </div>
  );
};

export default SwiperContainer;
