import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IPalette } from '../models/colorpalette.interface'; // Import IPalette interface
import Logo from './logo';
import ShowMore from './showmore';

const DetailSwiper = ({
  paletteId,
  colorpalette,
  activeIndex,
  getColor,
}: {
  paletteId: string;
  colorpalette: IPalette;
  activeIndex: number;
  getColor: (index: number) => void;
}) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [paletteName, setPaletteName] = useState<string>('');
  const [paletteDesc, setPaletteDesc] = useState<string>('');
  const { data: session, status } = useSession();
  const router = useRouter();

  const paletteInfo = colorpalette?.paletteInfo || '';
  const userColorDisposition = colorpalette?.userColorDisposition || '';

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/deletePalette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Corrected the body payload format
      });

      if (!response.ok) {
        throw new Error('Failed to delete palette');
      }

      toast.success(
        'Palette Deleted Successfully! You will be redirected soon!',
        {
          position: 'top-right',
        },
      );

      setTimeout(() => {
        router.push('/savedPalettes');
      }, 5000);

      console.log(await response.text());
    } catch (error) {
      toast.error('Could not delete Palette! You will be redirected soon!', {
        position: 'top-right',
      });
      console.error('Error:', error);
    }
  };

  return (
    <div className="color-palette-div">
      <ToastContainer />
      <div className="palette-heading">
        <div className="back">
          <Link href={'/'} className="home">
            <FaArrowLeft /> home
          </Link>
          <Logo />
        </div>

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
        <button
          type="submit"
          className="delete-btn btn"
          onClick={() => handleDelete(paletteId)}
        >
          Delete
        </button>
      </div>
      <div className="showmore">
        <div className="explanation">
          <ShowMore
            header="Colorpalette Info"
            explanation={`${paletteInfo}${userColorDisposition}`}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailSwiper;
