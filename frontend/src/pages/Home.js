import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState({});

  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar setFilters={setFilters} />
        <ProductGrid filters={filters} />
      </div>
      <Footer />
    </>
  );
}