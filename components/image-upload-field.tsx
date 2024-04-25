import React, { forwardRef, useImperativeHandle } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { CgInfo } from "react-icons/cg";
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
    <div className='upload-section'>
      <input
        type="file"
        accept="image/*"
        name="image"
        id="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div className='upload-heading'>
        <h3>upload image</h3> <div className="icon-div">
        <CgInfo className='icon'/>
          </div>
          
        <div className='blob'>
        Please upload an image with good lighting where your face is clearly visible against a white background.
        </div>
      </div>
      
      <div className="img-input">
        <img className='img-resize' src={imageSrc} width="200" alt="" />
        <span>only png or jpg</span>
      </div>

      <div className="uploadImage">
        <label htmlFor="file" style={{ cursor: 'pointer' }} className="btn-img">
        <IoCloudUploadOutline className="cloud"/>
          Upload Image
        </label>
      </div>
    </div>
  );
});

// Set display name for the component
ImageUploadField.displayName = 'ImageUploadField';

export default ImageUploadField;
