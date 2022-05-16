import React, { useState } from "react";
import "./styles.css";

// COMPONENTS
import {
  ProductCardsContainer,
  ProductCardElement,
  CardBodyFlex,
  ProductHeaderTitle,
} from "./design";
import { Card, Button, Carousel, Row, Col } from "react-bootstrap";

import { SRLWrapper } from "simple-react-lightbox";

// ICONS
import { BsCircleFill, BsCircle } from "react-icons/bs";
//
// IMAGES
//* Product Card header image
import headerImg from "../../imgs/product/names/lilJavi-black.png";

//* Product Card images
import roosterProductA1 from "../../imgs/product/sculptures/Product-1/1A.png";
import roosterProductA2 from "../../imgs/product/sculptures/Product-1/2B.png";
import roosterProductA3 from "../../imgs/product/sculptures/Product-1/3C.png";
import roosterProductA4 from "../../imgs/product/sculptures/Product-1/4D.png";
import roosterProductA5 from "../../imgs/product/sculptures/Product-1/5E.png";

const ProductCard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ProductCardsContainer>
        <ProductCardElement>
          <Card.Header className="cardHeader-plain">
            <a href="#">
              <ProductHeaderTitle src={headerImg} />
            </a>
            <small
              style={{
                color: "red",
                float: "right",
                fontSize: "13px",
                paddingTop: "18px",
                paddingRight: "6px",
              }}
            >
              <BsCircleFill />
            </small>
          </Card.Header>
          <Card.Body>
            <CardBodyFlex>

              <SRLWrapper>
                <Carousel interval={null} id="carousel-image-container">
                  <Carousel.Item>
                    <img
                      src={roosterProductA1}
                      alt="First slide"
                      className="cardImg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={roosterProductA2}
                      alt="Second slide"
                      className="cardImg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={roosterProductA3}
                      alt="Third slide"
                      className="cardImg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={roosterProductA4}
                      alt="Fourth slide"
                      className="cardImg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={roosterProductA5}
                      alt="Fifth slide"
                      className="cardImg"
                    />
                  </Carousel.Item>
                </Carousel>
              </SRLWrapper>
              <Card.Title style={{ display:"flex", justifyContent: "center", marginTop: "10px", gap: "30px", alignText: "center", fontSize: "16px" }}>
                <p>Artist: <small style={{ color: "grey" }}> Ernesto Damian </small> </p> 
                <p>Title: <small style={{ color: "grey" }}> I Dream in Color </small> </p> 
                <p style={{}}>  Production #  <small style={{ color: "grey" }}> F19G37 </small> </p>
              </Card.Title>
                <p  style={{ color: "grey" }}> This sculpture is colorfully painted in a mosaic style detailing dreams of sunlight, 
                and the twighlight    </p>


            </CardBodyFlex>

          </Card.Body>
          <Card.Footer className="productCardFooter">
            <div
                  className="text-muted"
                  style={{
                    float: "left",
                 
                    padding: "8px",
                

                  }}
                >
                  <small
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "bold"
                    }}
                  >
                    $--.--{" "}
                  </small>
                </div>

            <Button
              variant="outline-dark"
              style={{
                marginLeft: "20px",
                marginBottom: "24px",
                textAlign:"center",
                fontSize: "14px",
              }}
            >
             Coming Soon
            </Button>
          </Card.Footer>
        </ProductCardElement>
      </ProductCardsContainer>
    </>
  );
};

export default ProductCard;
 