import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import Home from "./components/Home"
import AboutPage from "./components/AboutPage";
import SimpleReactLightbox from "simple-react-lightbox";
import UnderConstruction from "./components/UnderConstruction";



import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <SimpleReactLightbox>
          <MainHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<UnderConstruction />} />
            <Route path="/artists" element={<UnderConstruction />} />
            <Route path="/cart" element={<UnderConstruction />} />
            <Route path="/support" element={<UnderConstruction />} />
            <Route path="/newsletter" element={<UnderConstruction />} />
          </Routes>
          <MainFooter />
        </SimpleReactLightbox>
      </BrowserRouter>
    </>
  );
}

export default App;


