import React from 'react';

const ImageInputField: React.FC = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const image = document.getElementById('output') as HTMLImageElement;
      image.src = URL.createObjectURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        name="image"
        id="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="file" style={{ cursor: 'pointer' }}>
        Upload Image
      </label>
      <img id="output" width="200" />
    </div>
  );
};

export default ImageInputField;
