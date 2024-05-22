import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Logo from './logo';
import ShowMore from './showmore';
import { CiExport } from 'react-icons/ci';
import { FiSave } from 'react-icons/fi';
import prisma from '../lib/prisma';
import { IPalette } from '../models/colorpalette.interface'; // Import IPalette interface
import { ISavePalette } from '@/app/api/savePalette/route';

const SwiperContainer = ({
  colorpalette,
  activeIndex,
  getColor,
}: {
  colorpalette: IPalette;
  activeIndex: number;
  getColor: (index: number) => void;
}) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [paletteName, setPaletteName] = useState<string>('');
  const [paletteDesc, setPaletteDesc] = useState<string>('');

  useEffect(() => {
    const fetchUserEmail = async () => {
      const userEmail = 'user@test.com';
      setUserEmail(userEmail);
    };

    fetchUserEmail();
  }, []);

  async function saveColorPalette() {
    try {
      const savePalette: ISavePalette = {
        paletteName,
        paletteDesc,
        palette: colorpalette,
      };

      const response = await fetch('/api/savePalette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(savePalette),
      });

      if (!response.ok) {
        throw new Error('Failed to save palette');
      }

      console.log(await response.text());
    } catch (error) {
      console.error('Error:', error);
    }
  }

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
      <div className="links">
        <form
          onSubmit={e => {
            e.preventDefault();
            saveColorPalette();
          }}
          className="swiper-form"
        >
          <div className="nam-form">
            <label>Palette Name:</label>
            <input
              type="text"
              placeholder="Palette Name"
              value={paletteName}
              onChange={e => setPaletteName(e.target.value)}
              required
            />
          </div>
          <div className="description-form">
            <label>Palette Description:</label>
            <input
              type="text"
              placeholder="Palette Description"
              value={paletteDesc}
              onChange={e => setPaletteDesc(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-main btn">
            Save
            <FiSave className="link-icon" />
          </button>
        </form>
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
    </div>
  );
};

export default SwiperContainer;
