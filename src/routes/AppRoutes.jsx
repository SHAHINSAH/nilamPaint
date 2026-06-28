import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import ColorCatalogue from "../pages/Colors/ColorCatalogue";
import DealerLocator from "../pages/Dealers/DealerLocator";
import PaintCalculator from "../pages/Calculator/PaintCalculator";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Admin/Dashboard";
import Services from "../components/Services/Services";

export default function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/colors" element={<ColorCatalogue />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dealers" element={<DealerLocator />} />
          <Route path="/calculator" element={<PaintCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}