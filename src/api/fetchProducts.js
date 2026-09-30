import products from "../data/products";

const SHOULD_FAIL = false;

function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SHOULD_FAIL) {
        reject(new Error("Server error"));
      } else {
        resolve(products);
      }
    }, 1500);
  });
}

export default fetchProducts;
