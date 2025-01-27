import React from "react";
import ProductList from "@/components/ProductList/ProductList";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-2xl font-bold">Fake Store Products</h1>
      </header>
      <main className="py-6"> */}
      <ProductList />
      {/* </main>
      <footer className="text-center text-gray-500 py-4">
        © {new Date().getFullYear()} Fake Store
      </footer> */}
    </div>
  );
};

export default Home;
