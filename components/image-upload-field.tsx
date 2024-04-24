import React, { forwardRef, useImperativeHandle } from "react";

interface Props {
  setImageSrcFromChild: (imageUrl: string) => void;
}

const ImageUploadField = forwardRef((props: Props, ref) => {
  const [imageSrc, setImageSrc] = React.useState("");

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
        style={{ display: "none" }}
      />
      <label htmlFor="file" style={{ cursor: "pointer" }}>
        Upload Image
      </label>
      <img src={imageSrc} width="200" alt="Uploaded" />
    </div>
  );
});

// Set display name for the component
ImageUploadField.displayName = "ImageUploadField";

export default ImageUploadField;
