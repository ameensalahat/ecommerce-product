function QuantitySelector({ quantity, setQuantity }) {
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <h3>Quantity</h3>

      <div className="quantity-controls">
        <button
          onClick={decreaseQuantity}
          disabled={quantity === 1}
          
        >
          -
        </button>

        <span>{quantity}</span>

        <button onClick={increaseQuantity} >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;
