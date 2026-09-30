function RelatedProducts({ products, currentProductId, onProductSelect }) {
  const relatedProducts = products.filter(
    (product) => product.id !== currentProductId
  );

  return (
    <section className="related-products">
      <h2>Related Products</h2>

      <div className="products-grid">
        {relatedProducts.map((product) => (
          <button
            key={product.id}
            className="related-product"
            onClick={() => onProductSelect(product)}
          >
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
