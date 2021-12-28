// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import styled, { css } from "styled-components";

// COMPONENTS
import ProductCard from "../ProductCard";
import FrontPageArtists from "../FrontPageArtists";

// ICONS
import { BsCircleFill, BsCircle } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

const FrontPageShopContainer = styled("div")`
  display: block;
  position: relative;
  /* width: 90vw; */
  /* height: 100vh; */
  bottom:0;
  margin-left:40px;
  margin-right:40px;
  margin-top: 60px;
  
  /* background:url(
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAEJJREFUKFNj/PDhw38GBgYGAQEBRhCNCzASrRCbCffu3QPboqSkBLcFq3VEK8RmCyM23ZQpxKYbW0hg9QzRCrHZAgApHCALWt3RqwAAAABJRU5ErkJggg==
   ) repeat; */

  /* background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23dbdbdb' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E"); */

  /* background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ededed' fill-opacity='0.34'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
`;

// FRONT PAGE SHOP HEADER
const FrontPageShopHeader = styled("span")`
  display:inline;
  position: relative;
  font-family: "menuFont";
  font-size: 38px;
  font-weight: bold;
  letter-spacing: 3px;
  border: 4px black dotted;
  padding: 12px;
  background-color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 0 gainsboro, 2px 1.2px 0 grey;

  @media (max-width: 879px) {
    font-size: 28px;
    
  }
`;

function FrontPageShop() {
  return (
    <>
      <FrontPageShopContainer>
        <Row>
          <Col sm={6}>
            <FrontPageShopHeader>
              LATEST ARRIVALS
            </FrontPageShopHeader>
          </Col>


          <Col sm={6} style={{
            marginRight:"100px",
            marginTop: "12px"
          }}>

            <small> <small
              style={{
                color: "red",
                fontSize: "14px",
                marginLeft:"10px"
              }}
            > <BsCircleFill />
            </small> - Sold Out </small>


            <small> <small
              style={{
                color: "black",
                fontSize: "14px",
                marginLeft:"10px"
              }}
            > <BsCircleFill /> 
            </small> - Limited Stock </small>


            <small> <small
              style={{
                color: "black",
                fontSize: "14px",
                marginLeft:"10px"
              }}
            > <BsCircle />
            </small> - In Stock </small>


          </Col>

        </Row>
        <ProductCard></ProductCard>
      </FrontPageShopContainer>
    </>
  );
}

export default FrontPageShop;

