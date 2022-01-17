// import '../MainHeader/MainHeader.css'

import styled, { css } from "styled-components";

// CSS-DESIGN
import "./style.css"

// COMPONENTS
import ProductCard from "../ProductCard";
import FrontPageArtists from "../FrontPageArtists";

const FrontPageShopContainer = styled("div")`
  display: block;
  position: relative;
  bottom:0;
  margin-left:40px;
  margin-right:40px;
  margin-top: 40px;
  text-align:center;
  /* background-color: rgba(0,0,0,0.07) */
`;

// FRONT PAGE SHOP HEADER
const FrontPageShopHeader = styled("h1")`
  position: relative !important;
  display:block !important; 
    font-family: "brandFont";
 font-size: 72px !important;
 letter-spacing: 3px !important;
 padding: 32px;
 border-width: 14px;
 border-top-style: solid;
 border-bottom-style: solid;
 border-image: repeating-radial-gradient(
      circle at -12px,
      grey,
      transparent 2px,
      black 8px,
      slategrey 2px
    )
    26;
  margin-bottom: 30px;
  text-align:center;
  text-shadow: 2px 2px 0 gainsboro, 2px 1.2px 0 grey;
 
  @media (max-width: 879px) {
    font-size: 28px;
    
  }
`;

function FrontPageShop() {
  return (
    <>
      {/* <FrontPageShopHeader>*** LATEST ARRIVALS ***</FrontPageShopHeader> */}
      <div className="wrapper" id="frontshop">
        <h1 className="title">PROOF OF CONCEPT</h1>
      </div>
      <FrontPageShopContainer>
        <ProductCard></ProductCard>
      </FrontPageShopContainer>
    </>
  );
}

export default FrontPageShop;

/*

      <FrontPageShopContainer>
        <Row>
          <Col sm={6}>
            <h1
            style={{
              textAlign:"center"
            }}
            
            >LATEST ARRIVALS</h1>
          </Col>


          <Col sm={6} style={{
            marginRight: "100px",
            marginTop: "12px"
          }}>

            <small> <small
              style={{
                color: "red",
                fontSize: "14px",
                marginLeft: "10px"
              }}
            > <BsCircleFill />
            </small> - Sold Out </small>


          </Col>

        </Row>
        <ProductCard></ProductCard>
      </FrontPageShopContainer>

*/