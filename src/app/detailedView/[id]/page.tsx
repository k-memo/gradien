'use client';
import { useEffect, useState } from 'react';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../../../components/logo';
import ShowMore from '../../../../components/showmore';
import { IGetUserPalette } from '../../../../models/getUserPalette.interface';
import SwiperContainer from '../../../../components/swiper-container';
import { IPalette } from '../../../../models/colorpalette.interface';
import DetailSwiper from '../../../../components/detail-swiper';

const PaletteDetail = ({ params }: { params: { id: string } }) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [palette, setPalette] = useState<IGetUserPalette>();
  const [loading, setLoading] = useState<boolean>(false);

  const getColor = (index: number) => {
    console.log(index);
  };

  useEffect(() => {
    const getPalettes = async (): Promise<IGetUserPalette[]> => {
      const response = await fetch('../api/getUserPalettes');
      console.log(params.id);
      console.log;
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
    };

    const fetchPalettes = async () => {
      try {
        const palettes: IGetUserPalette[] = await getPalettes();
        const palette = palettes.find(x => x.id === params.id);

        if (palette) {
          setPalette(palette);
        }
      } catch (error) {
        console.error('Error fetching palettes:', error);
      }
    };

    setLoading(true);
    fetchPalettes();
    setLoading(false);
  }, []);

  return (
    <section id="palette-section">
      {loading ? (
        <p> loading .... </p>
      ) : (
        <DetailSwiper
          colorpalette={palette?.palleteJson as IPalette}
          activeIndex={0}
          getColor={getColor}
        />
      )}
    </section>
  );
};

export default PaletteDetail;
