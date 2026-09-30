import { useState } from "react";

function ProductGallery({ images, productName }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={selectedImage} alt={productName} />
      </div>

      {images.length > 1 && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${productName} view ${index + 1}`}
              className={image === selectedImage ? "active" : ""}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
