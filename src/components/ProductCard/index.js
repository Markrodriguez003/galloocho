import React, { useState } from "react";
import './styles.css'

// COMPONENTS
import {
  ProductCardsContainer,
  ProductCardElement,
  CardBodyFlex,
  CardFooterFlex
} from "./design"
import { Card, Button, Carousel, Modal, Container, Row, Col } from "react-bootstrap";
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";

// ICONS
import { BsCircleFill, BsCircle } from "react-icons/bs"

// IMAGES
import roosterProductA1 from "../../imgs/product/sculpture-main/Product-A/1-A.jpg";
import roosterProductA2 from "../../imgs/product/sculpture-main/Product-A/2-A.jpg";
import roosterProductA3 from "../../imgs/product/sculpture-main/Product-A/3-A.jpg";
import roosterProductA4 from "../../imgs/product/sculpture-main/Product-A/4-A.jpg";
import roosterProductA5 from "../../imgs/product/sculpture-main/Product-A/5-A.jpg";


const ProductCard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ProductCardsContainer>
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" >
            <ProductCardElement>
              <Card.Header className="cardHeader">MIDNIGHT - CAW</Card.Header>
              <Card.Body>
                <CardBodyFlex style={{ display: "flex", }}>
                  <SRLWrapper>
                    <Carousel  >
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
                          alt="Third slide"
                          className="cardImg"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={roosterProductA5}
                          alt="Third slide"
                          className="cardImg"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </SRLWrapper>
                  {/* </div> */}
                  <Card.Title style={{ cursor: "pointer" }}>
                    Artist:
                    <small style={{ color: "grey" }}> Jose Suarez Jr.</small>
                  </Card.Title>
                  <Card.Text>
                    This uniquely striking rooster is painted onxy black, with
                    notes of dark purple and crimson. Coated in epoxy and
                    burred for ultimate shine and smoothness.
                  </Card.Text>
                </CardBodyFlex>
              </Card.Body>
              <Card.Footer>
                <CardFooterFlex>
                  <small style={{
                    color: "red"
                  }}>
                    <BsCircleFill />

                  </small>
                  <small
                    className="text-muted"
                    style={{
                      marginLeft: "50px",
                      marginBottom: "24px",
                      fontSize: "18px",
                    }}
                  >
                    $80.00{" "}
                  </small>

                  <Button
                    variant="success"
                    style={{
                      marginLeft: "20px",
                      marginBottom: "24px",
                      float: "right",
                      fontSize: "14px",
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardFooterFlex>
              </Card.Footer>
            </ProductCardElement>
          </Col>



          <Col xs="12" sm="12" md="6" lg="4" >
            <ProductCardElement>
              <Card.Header className="cardHeader">MIDNIGHT - CAW</Card.Header>
              <Card.Body>
                <CardBodyFlex style={{ display: "flex", }}>
                  <SRLWrapper>
                    <Carousel  >
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
                          alt="Third slide"
                          className="cardImg"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={roosterProductA5}
                          alt="Third slide"
                          className="cardImg"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </SRLWrapper>
                  {/* </div> */}
                  <Card.Title style={{ cursor: "pointer" }}>
                    Artist:
                    <small style={{ color: "grey" }}> Jose Suarez Jr.</small>
                  </Card.Title>
                  <Card.Text>
                    This uniquely striking rooster is painted onxy black, with
                    notes of dark purple and crimson. Coated in epoxy and
                    burred for ultimate shine and smoothness.
                  </Card.Text>
                </CardBodyFlex>
              </Card.Body>
              <Card.Footer>
                <CardFooterFlex>
                  <small style={{
                    color: "red"
                  }}>
                    <BsCircleFill />

                  </small>
                  <small
                    className="text-muted"
                    style={{
                      marginLeft: "50px",
                      marginBottom: "24px",
                      fontSize: "18px",
                    }}
                  >
                    $80.00{" "}
                  </small>

                  <Button
                    variant="success"
                    style={{
                      marginLeft: "20px",
                      marginBottom: "24px",
                      float: "right",
                      fontSize: "14px",
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardFooterFlex>
              </Card.Footer>

            </ProductCardElement>
          </Col>

          <Col xs="12" sm="12" md="6" lg="4" >
            <ProductCardElement>
              <Card.Header className="cardHeader">MIDNIGHT - CAW</Card.Header>
              <Card.Body>
                <CardBodyFlex style={{ display: "flex", }}>
                  <SRLWrapper>
                    <Carousel  >
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
                          alt="Third slide"
                          className="cardImg"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={roosterProductA5}
                          alt="Third slide"
                          className="cardImg"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </SRLWrapper>
                  {/* </div> */}
                  <Card.Title style={{ cursor: "pointer" }}>
                    Artist:
                    <small style={{ color: "grey" }}> Jose Suarez Jr.</small>
                  </Card.Title>
                  <Card.Text>
                    This uniquely striking rooster is painted onxy black, with
                    notes of dark purple and crimson. Coated in epoxy and
                    burred for ultimate shine and smoothness.
                  </Card.Text>
                </CardBodyFlex>
              </Card.Body>
              <Card.Footer>
                <CardFooterFlex>
                  <small style={{
                    color: "red"
                  }}>
                    <BsCircleFill />

                  </small>
                  <small
                    className="text-muted"
                    style={{
                      marginLeft: "50px",
                      marginBottom: "24px",
                      fontSize: "18px",
                    }}
                  >
                    $80.00{" "}
                  </small>

                  <Button
                    variant="success"
                    style={{
                      marginLeft: "20px",
                      marginBottom: "24px",
                      float: "right",
                      fontSize: "14px",
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardFooterFlex>
              </Card.Footer>

            </ProductCardElement>
          </Col>
        
        </Row>
      </ProductCardsContainer>
    </>
  );
};

export default ProductCard;



/*




*/