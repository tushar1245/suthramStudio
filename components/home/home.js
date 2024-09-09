import { Infrastructure } from "../infrastructure/Infrastructure";
import Navbar from "../navbar/nav";
import Product from "../products/Product";
import Footer from "./Footer";
import JoinUs from "./JoinUs";
import LandingVideo from "./LandingVideo";
import Products from "./Products";
import Welcome from "./Welcome";
import WhyUs from "./Whyus";

const Home = () => {
  return (
    <>
      <LandingVideo />
      <Welcome />
      <Products />
      <JoinUs />
      <WhyUs />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
