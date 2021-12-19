// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import styled, { css } from "styled-components";

// COMPONENTS 
import ProductCard from "../ProductCard";

import {Form} from "react-bootstrap";



// CSS

import { Button, Container, Carousel, CarouselItem } from "react-bootstrap";
// FONTS

// IMAGES


const FrontPageShopContainer = styled('div')`
/* background-color: transparent; */
padding: 45px;
display: block;
position: relative;
  width: 100%;
  height: 100vh;
 

/* TEXTURE NO.1 */

   /* background:url(
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAEJJREFUKFNj/PDhw38GBgYGAQEBRhCNCzASrRCbCffu3QPboqSkBLcFq3VEK8RmCyM23ZQpxKYbW0hg9QzRCrHZAgApHCALWt3RqwAAAABJRU5ErkJggg==
   ) repeat; */


   /* TEXTURE NO. 2 */
   /* background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23dbdbdb' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E"); */


background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ededed' fill-opacity='0.34'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

`

// FRONT PAGE SHOP HEADER
const FrontPageShopHeader = styled('span')`
font-family: "menuFont";
font-size: 46px;
font-weight:bold;
letter-spacing: 3px;
border: 4px black dotted;
padding: 12px;
background-color: white ;
/* text-shadow: 2px 2px 0 gainsboro, 2px 4px 0 #9c9c9c; */
`



function FrontPageShop() {
  return (

    <>
      <FrontPageShopContainer>
        {/* <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select> */}
        <FrontPageShopHeader>LATEST ARRIVALS</FrontPageShopHeader>
        <ProductCard></ProductCard>
      </FrontPageShopContainer>

    </>


  );
}

export default FrontPageShop;

/* CAROUSEL


// COMPONENT FUNCTION
const CarouselContainer = styled(Container)`
  padding-top: 180px;
  padding-left: auto;
  padding-right: auto;
  text-align: center;
`;

   {/* <CarouselContainer>
            <Carousel>
              <Carousel.Item>
                <CarouselImg src={rooster1} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselImg src={rooster1} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselImg src={rooster1} alt="Third slide" />

                <Carousel.Caption>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </CarouselContainer> */


