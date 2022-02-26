import { Routes } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Hero from "./components/hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { PauseOnHover } from "./components/Products";
import CarouselComponent from "./components/Carousel/CarouselComponent";

function App() {
  return (
    <div className="w-100">
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your Favourite" data={productData} />
      <Feature />
      <CarouselComponent />
      <PauseOnHover heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </div>
  );
}
export default App;
