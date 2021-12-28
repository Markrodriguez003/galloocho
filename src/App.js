import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import Hero from "./components/Hero";
import ThreeD from "./components/ThreeD";
import ProductCard from "./components/ProductCard";
import FrontPageShop from "./components/FrontPageShop";
import ShopPage from "./components/ShopPage";
import SimpleReactLightbox from "simple-react-lightbox";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <SimpleReactLightbox>
        <MainHeader />
        {/*   <Hero />
        <FrontPageShop /> */}
        <ShopPage />
   {/*      {<MainFooter />} */}
      </SimpleReactLightbox>
    </>
  );
}

export default App;
