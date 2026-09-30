const sizes = ["S", "M", "L"];
const colors = ["Red", "Blue", "Green"];

function OptionGroup({ title, options, selectedOption, onSelect }) {
  return (
    <div className="option-group">
      <h3>{title}</h3>

      <div className="option-buttons">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={selectedOption === option ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductOptions({
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}) {
  return (
    <div className="product-options">
      <OptionGroup
        title="Size"
        options={sizes}
        selectedOption={selectedSize}
        onSelect={setSelectedSize}
      />

      <OptionGroup
        title="Color"
        options={colors}
        selectedOption={selectedColor}
        onSelect={setSelectedColor}
      />
    </div>
  );
}

export default ProductOptions;
