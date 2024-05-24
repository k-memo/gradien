import { ISavePalette } from '@/app/api/savePalette/route';
import { signIn, SignInResponse, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FiSave } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IPalette } from '../models/colorpalette.interface'; // Import IPalette interface
import Logo from './logo';
import ShowMore from './showmore';
import 'react-toastify/dist/ReactToastify.css';

const handleDelete = (id: string) => {
  console.log();
};

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

  const popupCenter = (url, title) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;
    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${
        550 / systemZoom
      },top=${top},left=${left}`,
    );

    newWindow?.focus();
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
            explanation={
              colorpalette?.paletteInfo + colorpalette?.userColorDisposition
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DetailSwiper;
