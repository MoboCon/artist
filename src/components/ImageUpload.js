import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
  };

  return (
    <div className="image-upload">
      <input type="file" multiple onChange={handleUpload} />
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt="uploaded" />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
