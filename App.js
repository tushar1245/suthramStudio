import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./components/products/Product";
import Navbar from "./components/navbar/nav";
// import Navbar from "./components/navbar/nav";
import img from "./utils/photos/img1.jpg";
import { Infrastructure } from "./components/infrastructure/Infrastructure";
import { AboutUs } from "./components/home/AboutUs";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <Router>
        {/* <div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Home />} /> */}
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/product/:name" element={<Product />} />
        </Routes>

        {/* </div> */}
      </Router>
      <Footer />

      {/* <Home /> */}
    </>
  );
}

export default App;
