import classicGreen from "../assets/classic-tshirt-green.jpg";
import classicBlue from "../assets/classic-tshirt-blue.jpg";
import classicRed from "../assets/classic-tshirt-red.jpg";
import hoodieRed from "../assets/hoodie-red.webp";
import hoodieBlue from "../assets/hoodie-blue.jpg";
import hoodieGreen from "../assets/hoodie-green.webp";
import jacketGreen from "../assets/jacket-green.jpg";
import jacketBlue from "../assets/jacket-blue.jpg";
import jacketRed from "../assets/jacket-red.jpg";
import shoeGreen from "../assets/shoe-green.png";
import shoeBlue from "../assets/shoe-blue.webp";
import shoeRed from "../assets/shoe-red.jpg";
import jeansGreen from "../assets/jeans-green.webp";
import jeansBlue from "../assets/jeans-blue.png";
import jeansRed from "../assets/jeans-red.jpg";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 25,
    images: [classicGreen, classicBlue, classicRed],
    description:
      "A comfortable and stylish cotton T-shirt, perfect for everyday use.",
  },
  {
    id: 2,
    name: "Jacket",
    price: 60,
    images: [jacketGreen, jacketBlue, jacketRed],
    description: "A warm, water-resistant jacket for cold and rainy days.",
  },
  {
    id: 3,
    name: "Hoodie",
    price: 45,
    images: [hoodieRed, hoodieBlue, hoodieGreen],
    description: "A warm and cozy hoodie for cold days.",
  },
  {
    id: 4,
    name: "Shoe",
    price: 30,
    images: [shoeGreen, shoeBlue, shoeRed],
    description: "A lightweight, comfortable sneaker for everyday wear.",
  },
  {
    id: 5,
    name: "Jeans",
    price: 40,
    images: [jeansGreen, jeansBlue, jeansRed],
    description: "Comfortable straight-leg jeans for everyday wear.",
  },
];

export default products;
