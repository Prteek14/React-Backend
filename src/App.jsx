import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Services from "./components/Services/Services.jsx";
import Products from "./components/Products/Products.jsx";
import Product1 from "./components/Products/Product1.jsx";
import Product2 from "./components/Products/Product2.jsx";
import Product3 from "./components/Products/Product3.jsx";
import UseEffect from "./components/UseEffect/UseEffect.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Navigate to="product1" replace />} />
            <Route path="product1" element={<Product1 />} />
            <Route path="product2" element={<Product2 />} />
            <Route path="product3" element={<Product3 />} />
          </Route>
          <Route path="/UseEffect" element={<UseEffect />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
