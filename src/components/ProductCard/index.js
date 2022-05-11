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

// ! https://alvarotrigo.com/blog/css-animations-scroll/ <<animation for productcards

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
                fontSize: "11px",
                paddingTop: "18px",
                paddingRight: "6px",
              }}
            >
              <BsCircleFill />
            </small>
          </Card.Header>
          <Card.Body>
            <CardBodyFlex style={{ display: "flex" }}>
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
              {/*  <Card.Title style={{ cursor: "pointer", marginTop: "10px" }}>
                    Artist:
                    <small style={{ color: "grey" }}> Jose Oso</small>
                    <p style={{ float: "right" }}>  Production #  <small style={{ color: "grey" }}> F19G37 </small> </p>

                  </Card.Title> */}
              {/*   <Card.Text>
                    <small className="text-muted">
                      Gallo Ocho 1 of 1 Sculptures and Art
                    </small>
                  </Card.Text> */}
              <Card.Text style={{fontFamily: "menuFont", fontSize: "20px"}}>
                For those who've always wanted a rooster of their own, we
                introduce Little Havi, the little rooster of Miami! Standing
                just 9 inches tall, this genuine ceramic statuette pays homage
                to Miami’s most famous farm animal—and its most fabulous city
                mascot. Featuring hand-painted detail and eye-catching color
                schemes, Little Havi was designed by local artists who wanted to
                give both visitors and locals alike a way to show their pride in
                this quirky and fun city where there’s always something new to
                see or experience.
              </Card.Text>
            </CardBodyFlex>
          </Card.Body>
          <Card.Footer className="productCardFooter">
            {/* <div
                  className="text-muted"
                  style={{
                    float: "left",
                    // backgroundColor: "grey",
                    padding: "8px",
                    // borderTopLeftRadius: "20px",
                    // borderBottomLeftRadius: "20px"

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
                </div> */}

            <Button
              variant="outline-dark"
              style={{
                marginLeft: "20px",
                marginBottom: "24px",
                float: "right",
                fontSize: "14px",
              }}
            >
              Purchase
            </Button>
          </Card.Footer>
        </ProductCardElement>
      </ProductCardsContainer>
    </>
  );
};

export default ProductCard;

/*


  <Row>
          <Col xs="12" sm="12" md="6" lg="4">
            <ProductCardElement>
              <Card.Header className="cardHeader-plain">
                <a href="#"><ProductHeaderTitle src={headerImg} /></a>
                <small
                  style={{
                    color: "red",
                    float: "right",
                    fontSize: "11px",
                    paddingTop: "18px",
                    paddingRight: "6px"
                  }}
                >
                  <BsCircleFill />
                </small>
              </Card.Header>
              <Card.Body>
                <CardBodyFlex style={{ display: "flex" }}>
                  <SRLWrapper >
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
                  <Card.Title style={{ cursor: "pointer", marginTop: "10px" }}>
                    Artist:
                    <small style={{ color: "grey" }}> Jose Oso</small>
                    <p style={{ float: "right" }}>  Production #  <small style={{ color: "grey" }}> F19G37 </small> </p>

                  </Card.Title>
                  <Card.Text>
                    <small className="text-muted">
                      Gallo Ocho 1 of 1 Sculptures and Art
                    </small>
                  </Card.Text>
                  <Card.Text>
                    This uniquely striking rooster is painted onxy black, with
                    notes of dark purple and crimson. Coated in epoxy and burred
                    for ultimate shine and smoothness.
                  </Card.Text>
                </CardBodyFlex>
              </Card.Body>
              <Card.Footer className="productCardFooter">


                <div
                  className="text-muted"
                  style={{
                    float: "left",
                    // backgroundColor: "grey",
                    padding: "8px",
                    // borderTopLeftRadius: "20px",
                    // borderBottomLeftRadius: "20px"

                  }}
                >
                  <small
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "bold"
                    }}
                  >
                    $80.00{" "}
                  </small>
                </div>

                <Button
                  variant="outline-dark"
                  style={{
                    marginLeft: "20px",
                    marginBottom: "24px",
                    float: "right",
                    fontSize: "14px",
                  }}
                >
                  Add to Cart
                </Button>

              </Card.Footer>
            </ProductCardElement>
          </Col>




        </Row>

*/
