import styled, { css } from "styled-components";

// CSS-DESIGN
import "./style.css";

// COMPONENTS
import ProductCard from "../ProductCard";
import AboutPage from "../AboutPage";
import Newsletter from "../Newsletter";
import AniButton from "../AniButton"

import { Button } from "react-bootstrap";

/* SHOP NOW BUTTON LOCATED AT THE BOTTOM */
export const ShopNowButton = styled(Button)`
  display: block;
  /* background-color: #fafafa; */
  background-color: transparent ;
  color: black;
  font-size: 34px;
  font-family: "menuFont";
  font-weight: bold;
  border: none;
  margin-top: -25px;
  transition: 0.19s linear;
  text-align: center;

  &:hover {
    background-color: black !important;
  }

  /* @media (max-width: 860px) {
    font-size: 2.2em;
  } */
`;

const FrontPageShopContainer = styled("div")`
  display: block;
  position: relative;
  bottom: 0;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
  text-align: center;
`;

export const FlexBoxWrapper = styled("div")`
  display: flex;
  position: relative;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
 

  @media (max-width: 1325px) {
    flex-direction: column-reverse;
  }
`;

export const ProductCardInfo = styled("div")`
  font-family: "menuFont";
  font-size: 28px;
  width: 35vw;
  margin-right: 40px;
  
 
 
  p {
    /* text-shadow:1px 1px black; */
    
  }

  @media (max-width: 1609px) {
    font-size: 1.7vw;
  }

  @media (max-width: 1325px) {
    font-size: 25px;
    width: 38vw;
  }

  @media (max-width: 1200px) {
    font-size: 22.5px;
    width: 58vw;
  }

  @media (max-width: 635px) {
    font-size: 18.5px;
    width: 68vw;
  }
`;


function FrontPageShop() {
  return (
    <>
      {/* <FrontPageShopHeader>*** LATEST ARRIVALS ***</FrontPageShopHeader> */}
      <div className="wrapper">
        <h1 className="title" id="frontshop"><span style={{ color: "cadetblue" }}>Meet</span> Little Havi</h1>
      </div>
      <FrontPageShopContainer>

        <FlexBoxWrapper>
          <ProductCardInfo>
            <p>For those who've always wanted a
              <span style={{ color: "red" }}> rooster </span> of their own, we
              introduce Little Havi, the little rooster of Miami! Standing just 9
              inches tall, this genuine ceramic statuette pays homage to Miami’s
              most famous farm animal—and its most fabulous city mascot. Featuring
              hand-painted detail and eye-catching color schemes, Little Havi was
              designed by local artists who wanted to give both visitors and
              locals alike a way to show their pride in this quirky and fun city
              where there’s always something new to see or experience.</p>
            <br />

            <AniButton hrefTag="#about" btnTitle="About Us"></AniButton>
          </ProductCardInfo>
          <ProductCard></ProductCard>
        </FlexBoxWrapper>
      </FrontPageShopContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      ></div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <AboutPage id="aboutId" />

      <Newsletter id="contactId" />
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
