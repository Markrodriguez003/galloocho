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
      {/* <BackgroundImg /> */}
      <BrowserRouter>
        <SimpleReactLightbox>
          <MainHeader />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <MainFooter />
        </SimpleReactLightbox>
      </BrowserRouter>
    </>
  );
}

export default App;
