import { useState } from "react";
import ProductOptions from "./ProductOptions";
import QuantitySelector from "./QuantitySelector";

function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const canAddToCart = selectedSize !== "" && selectedColor !== "";
  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    if (!canAddToCart) {
      alert("Please select a size and a color.");
      return;
    }

    alert(
      `Added to cart!\n\nProduct: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nPrice: $${product.price}\nTotal: $${totalPrice}`
    );
  };

  return (
    <div className="product-info">
      <h2>{product.name}</h2>

      <p className="price">${product.price}</p>

      <p className="description">{product.description}</p>

      <ProductOptions
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <div className="product-summary">
        <h3>Selected:</h3>
        <p>Size: {selectedSize || "Not selected"}</p>
        <p>Color: {selectedColor || "Not selected"}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: ${product.price}</p>
        <p className="total">Total: ${totalPrice}</p>
      </div>

      <button
        className="add-to-cart"
        onClick={handleAddToCart}
        disabled={!canAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductInfo;
