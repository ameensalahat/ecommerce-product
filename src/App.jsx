import { useState, useEffect } from "react";
import "./App.scss";

import fetchProducts from "./api/fetchProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import RelatedProducts from "./components/RelatedProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setCurrentProduct(data[0]);
      } catch (err) {
        console.error(err);
        setError("Failed to load products.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const handleProductSelect = (product) => {
    setCurrentProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <p className="status-message">Loading products...</p>;
  }

  if (error) {
    return <p className="status-message error">{error}</p>;
  }

  return (
    <div className="app">
      <Header />

      <main>
        <section className="product-section">
          <ProductGallery
            key={`gallery-${currentProduct.id}`}
            images={currentProduct.images}
            productName={currentProduct.name}
          />

          <ProductInfo key={currentProduct.id} product={currentProduct} />
        </section>

        <RelatedProducts
          products={products}
          currentProductId={currentProduct.id}
          onProductSelect={handleProductSelect}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
