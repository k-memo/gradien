'use client';
import { useEffect, useState } from 'react';
import DetailSwiper from '../../../../components/detail-swiper';
import { IPalette } from '../../../../models/colorpalette.interface';
import { IGetUserPalette } from '../../../../models/getUserPalette.interface';

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
          paletteId={palette?.id as string}
          colorpalette={palette?.palleteJson as IPalette}
          activeIndex={0}
          getColor={getColor}
        />
      )}
    </section>
  );
};

export default PaletteDetail;
