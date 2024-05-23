'use client';
// app/detailedView/[id]/page.tsx
import { useEffect, useState } from 'react';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../../../components/logo';
import ShowMore from '../../../../components/showmore';
import { IPalette } from '../../../../models/colorpalette.interface';
import { IGetUserPalette } from '../../../../models/getUserPalette.interface';


const PaletteDetail = ({ params }: { params: { id: string } }) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [palette, setPalette] = useState<IGetUserPalette>();
  
  const getColor = (index: number) => {
    console.log(index);
  };
  
  useEffect(() => {
    const getPalettes = async (): Promise<IGetUserPalette[]> => {
      const response = await fetch('../api/getUserPalettes');
      console.log(params.id)
      console.log
      if (!response.ok) {
        throw new Error('Failed to fetch palettes');
      }
      const data = await response.json();
  
      const palettes = data.map(x => {
        return {
          ...x,
          palleteJson: JSON.parse(x.palleteJson),
        };
      });
  
      return palettes;
    }
  
    const fetchPalettes = async () => {
      try {
        const palettes: IGetUserPalette[] = await getPalettes();
        const palette = palettes.find((x) => x.id === params.id); 
  
        if (palette) {
          setPalette(palette);
        }
      } catch (error) {
        console.error('Error fetching palettes:', error);
      }
    }
  
    fetchPalettes();
  
  }, [params.id]); 
  

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
          initialSlide={0}
        >
          {palette?.palleteJson?.colors.map((color) => (
            <SwiperSlide key={color.name} style={{ backgroundColor: color.hex }}>
              {color.name}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="palette">
          {palette?.palleteJson.colors.map((color, index) => (
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
            explanation={palette?.palleteJson.paletteInfo as string + palette?.palleteJson.userColorDisposition as string}
          />
        </div>
      </div>
    </div>
  );
};

export default PaletteDetail;
