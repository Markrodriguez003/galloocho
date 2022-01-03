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
import ThreeD from "./components/ThreeD";



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
          </Routes>
          <MainFooter />
        </SimpleReactLightbox>

        {/* <ThreeD /> */}
      </BrowserRouter>
    </>
  );
}

export default App;


