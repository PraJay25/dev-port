import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    // Fetch products from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (searchId === "") return true; // Show all products when searchId is empty
    return product.id === parseInt(searchId);
  });

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      {/* Search Bar */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          value={searchId}
          onChange={handleSearchChange}
          placeholder="Search by Product ID"
          className="border p-2 w-full sm:w-64 rounded-md"
        />
      </div>

      {/* Products Grid */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-md p-3 bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-contain mb-2"
              />
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {product.description.slice(0, 50)}...
              </p>
              <div className="text-blue-600 font-bold mt-2">
                ${product.price}
              </div>
              <div className="text-gray-400 text-xs mt-1">ID: {product.id}</div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
