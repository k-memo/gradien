import Webcam from 'react-webcam';
import { useCallback, useRef, useState } from 'react'; // import useRef

interface ICustomWebcamProps {
  imageSrc: string;
  setSources: (url: string) => void;
}

export default function CustomWebcam({
  imageSrc,
  setSources,
}: ICustomWebcamProps) {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    // @ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    setSources(imageSrc);
  }, [webcamRef]);

  return (
    <div className="container">
      {imageSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam ref={webcamRef} />
      )}
      <div className="btn-container btn">
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
}
