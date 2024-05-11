/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 group">
      {products.map(product => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <div className="border py-1 px-2 mt-0 ml-2 ">
            <img src={product.thumbnail} alt={product.title} className="w-full mb-2" />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-lg font-semibold text-green-600">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
