// Products.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Products = () => {
  // Sample logic that might cause a redirect
  const isAuthenticated = false;

  if (isAuthenticated   ) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <h1>Products Page</h1>
      {/* Your products content */}
    </div>
  );
};

export default Products;
