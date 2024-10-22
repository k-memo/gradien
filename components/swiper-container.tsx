import { signIn, SignInResponse, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FiSave } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IPalette } from '../models/colorpalette.interface';
import Logo from './logo';
import ShowMore from './showmore';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingContainer } from './loading-container';
import { useRouter } from 'next/navigation';
import { ISavePalette } from '../models/savePalette.interface';

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
  const { data: session, status } = useSession();
  const [paletteSaved, setPaletteSaved] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const router = useRouter();

  const saveColorPalette = async (
    paletteName: string,
    paletteDesc: string,
    colorpalette: IPalette,
    setPaletteSaved,
    setButtonLoading,
  ) => {
    try {
      const savePalette: ISavePalette = {
        paletteName,
        paletteDesc,
        palette: colorpalette,
      };

      setButtonLoading(true);
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

      setPaletteSaved(true);
      toast.success('Palette Saved Successfully!', {
        position: 'top-right',
      });

      setButtonLoading(false);
      console.log(await response.text());

      router.push('/savedPalettes');
    } catch (error) {
      console.error('Error:', error);
      setButtonLoading(false);
    }
  };

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
            <FaArrowLeft /> HOME
          </Link>
          <div style={{ marginRight: '4em' }}>
            <Logo />
          </div>
          <div></div>
        </div>

        <h3>Your Colorpalette</h3>
      </div>
      <div className="palettes">
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
              <div className="colorname">{color.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="links">
          <form
            onSubmit={e => {
              e.preventDefault();
              saveColorPalette(
                paletteName,
                paletteDesc,
                colorpalette,
                setPaletteSaved,
                setButtonLoading,
              );
            }}
            className="swiper-form"
          >
            <div className="inputs">
              <h4>Save Your Color Palette</h4>
              <p>
                Preserve your carefully crafted color palette to ensure you can
                easily access and use it in the future. To get more Information,
                you can read your Colorpalette Info section.
              </p>

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
            </div>
            {status === 'authenticated' && paletteSaved === true && (
              <button
                type="submit"
                className="btn-main btn relative"
                disabled
                style={{ backgroundColor: 'green' }}
              >
                Saved
              </button>
            )}
            {status === 'authenticated' && paletteSaved === false && (
              <button
                type="submit"
                className="btn-main btn relative overflow-hidden"
                disabled={buttonLoading}
              >
                {buttonLoading ? <LoadingContainer /> : <>Save</>}
              </button>
            )}
            {status !== 'authenticated' && (
              <button
                onClick={() => popupCenter('/google-signin', 'Sample Sign In')}
                className="google-btn disabled"
              >
                Sign In with Google
              </button>
            )}
          </form>
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
    </div>
  );
};

export default SwiperContainer;
