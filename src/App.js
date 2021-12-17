 import './App.css';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Hero from './components/Hero';
import ThreeD from "./components/ThreeD"
import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <MainHeader/>
      <Hero/>

      {/* <ThreeD/> */}
      
      <ProductCard/>
      {/* <MainFooter/> */}
    </>
  );
}

export default App;
