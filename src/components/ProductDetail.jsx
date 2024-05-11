/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL params
  const product = products.find(p => p.id === parseInt(id)); // Find the product with the matching ID

  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;
