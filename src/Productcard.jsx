import React, { useContext } from "react";
import { ProductContext } from "./Context";
import { Link } from "react-router-dom";

const Productcard = ({ selectedCategory }) => {
  const { products } = useContext(ProductContext);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div style={styles.container}>
      {filteredProducts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={styles.card}
          >
            <img src={product.image} style={styles.image} alt={product.title} />
            <div style={styles.content}>
              <h2 style={styles.title}>{product.title}</h2>
              <p style={styles.category}>{product.category}</p>
              <p style={styles.price}>${product.price}</p>
              <div style={styles.rating}>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    width: "300px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    textDecoration: "none",
    color: "inherit",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "fill",
  },
  content: {
    padding: "20px",
  },
  title: {
    fontSize: "18px",
    margin: "10px 0",
    color: "#333",
  },
  category: {
    fontSize: "14px",
    margin: "5px 0",
    color: "#666",
  },
  price: {
    fontSize: "16px",
    margin: "10px 0",
    color: "#333",
    fontWeight: "bold",
  },
};

export default Productcard;
