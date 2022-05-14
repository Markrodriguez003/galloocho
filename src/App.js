import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import BackgroundImg from "./components/BackgroundImg"
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import SimpleReactLightbox from "simple-react-lightbox";
import UnderConstruction from "./components/UnderConstruction";
import Contact from "./components/Contact"


import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BackgroundImg />
      <BrowserRouter>
        <SimpleReactLightbox>
          <MainHeader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<UnderConstruction />} />
            <Route path="/shop" element={<UnderConstruction />} />
            <Route path="/artists" element={<UnderConstruction />} />
            <Route path="/cart" element={<UnderConstruction />} />
            <Route path="/support" element={<UnderConstruction />} />
            <Route path="/newsletter" element={<UnderConstruction />} />
            <Route path="/nft" element={<UnderConstruction />} />
            <Route path="/investor" element={<UnderConstruction />} />
            <Route path="/artist-sign-up" element={<UnderConstruction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/future" element={<UnderConstruction />} />
            <Route path="/refund" element={<UnderConstruction />} />
            <Route path="/affiliates" element={<UnderConstruction />} />
          </Routes>
          <MainFooter />
        </SimpleReactLightbox>
      </BrowserRouter>
    </>
  );
}

export default App;
