import React, { forwardRef, useImperativeHandle } from 'react';

interface Props {
  setImageSrcFromChild: (imageUrl: string) => void;
}

const ImageUploadField = forwardRef((props: Props, ref) => {
  const [imageSrc, setImageSrc] = React.useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      props.setImageSrcFromChild(imageUrl); // Call the function from props
    }
  };

  useImperativeHandle(ref, () => ({
    getImage: () => imageSrc,
  }));

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
      <h3>upload image</h3>
      <div className="img-input">
        <img src={imageSrc} width="200" alt="" />
        <span>only png or jpg</span>
      </div>

      <div className="uploadImage">
        <label htmlFor="file" style={{ cursor: 'pointer' }} className="btn-img">
          Upload Image
        </label>
      </div>
    </div>
  );
});

// Set display name for the component
ImageUploadField.displayName = 'ImageUploadField';

export default ImageUploadField;
