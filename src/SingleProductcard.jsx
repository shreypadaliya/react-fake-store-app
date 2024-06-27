import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProductcard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setIsLoading(false);
    };
    // const fetchProduct = async () => {
    //     try {
    //       const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    //       const data = await res.json();
    //       setProduct(data);
    //       setIsLoading(false);
    //     } catch (error) {
    //       setError(error);
    //       setIsLoading(false);
    //     }
    //   };

    fetchProduct();
  }, [id]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

  return (
    product && (
      <div style={styles.container}>
        <div style={styles.card}>
          <img
            src={product.image}
            alt={product.title}
            style={styles.image}
          />
          <div style={styles.content}>
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.category}>Category: {product.category}</p>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>Price: ${product.price}</p>
          </div>
        </div>
      </div>
    )
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '800px',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: '50%',
    height: 'auto',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
    width: '50%',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  category: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  },
  price: {
    fontSize: '20px',
    color: '#333',
    fontWeight: 'bold',
  },
};

export default SingleProductcard;
