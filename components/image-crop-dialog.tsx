import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../lib/cropImage';

interface ImageCropDialogProps {
  imageUrl: string;
  onCancel: () => void;
  setCropActivated: (bool: boolean) => void;
  setCroppedImageUrl: (url: string) => void;
}

export default function ImageCropDialog({
  imageUrl,
  onCancel,
  setCroppedImageUrl,
  setCropActivated,
}: ImageCropDialogProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropChange = crop => {
    setCrop(crop);
  };

  const onZoomChange = zoom => {
    setZoom(zoom);
  };

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(imageUrl, croppedAreaPixels);
    setCroppedImageUrl(croppedImageUrl);
    setCropActivated(false);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  return (
    <div className="image-crop">
      <div className="backdrop"></div>
      <div className="crop-container">
        <Cropper
          image={imageUrl}
          zoom={zoom}
          crop={crop}
          aspect={3 / 4}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="controls">
        <div className="controls-upper-area">
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              onZoomChange(Number(e.target.value));
            }}
            className="slider"
          ></input>
        </div>
        <div className="button-area">
          <button onClick={onCancel} className="btn btn-main">
            Cancel
          </button>
          <button
            onClick={onCrop}
            className="btn btn-main"
            data-testid="crop-button"
          >
            Crop
          </button>
        </div>
      </div>
    </div>
  );
}
