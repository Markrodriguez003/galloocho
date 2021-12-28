import React, { useState } from "react";
import "./styles.css";

// COMPONENTS
import {
  ProductCardsContainer,
  ProductCardElement,
  CardBodyFlex,
  CardFooterFlex,
} from "./design";
import {
  Card,
  Button,
  Carousel,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

// ICONS
import { BsCircleFill, BsCircle } from "react-icons/bs";

// IMAGES
import roosterProductA1 from "../../imgs/product/sculpture-main/Product-A/1-A.jpg";
import roosterProductA2 from "../../imgs/product/sculpture-main/Product-A/2-A.jpg";
import roosterProductA3 from "../../imgs/product/sculpture-main/Product-A/3-A.jpg";
import roosterProductA4 from "../../imgs/product/sculpture-main/Product-A/4-A.jpg";
import roosterProductA5 from "../../imgs/product/sculpture-main/Product-A/5-A.jpg";

import roosterProductB1 from "../../imgs/product/sculpture-main/Product-B/1-B.jpg";
import roosterProductB2 from "../../imgs/product/sculpture-main/Product-B/2-B.jpg";
import roosterProductB3 from "../../imgs/product/sculpture-main/Product-B/3-B.jpg";
import roosterProductB4 from "../../imgs/product/sculpture-main/Product-B/4-B.jpg";
import roosterProductB5 from "../../imgs/product/sculpture-main/Product-B/5-B.jpg";

// ! https://alvarotrigo.com/blog/css-animations-scroll/ <<animation for productcards

const ProductCard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ProductCardsContainer>
        <Row>
          <Col xs="12" sm="12" md="12" lg="4">
            <ProductCardElement zanyBorder>
              <Card.Header className="cardHeader">MIDNIGHT - CAW
                <small
                  style={{
                    color: "black",
                    float: "right",
                    fontSize: "14px",
                    paddingTop: "18px",
                    paddingRight: "6px"
                  }}
                >
                  <BsCircleFill />
                </small>
              </Card.Header>
              <Card.Body>
                <CardBodyFlex>
                  <SRLWrapper>
                    <Carousel interval={null}>
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
                  <Card.Title style={{ cursor: "pointer", marginTop: "10px" }}>
                    Artist:
                    <small style={{ color: "grey" }}> Jose Oso</small>
                    <p style={{ float: "right" }}>  Production #  <small style={{ color: "grey" }}> F19G37  </small> </p>

                  </Card.Title>
                  <Card.Text>
                    This uniquely striking rooster is painted onxy black, with
                    notes of dark purple and crimson. Coated in epoxy and burred
                    for ultimate shine and smoothness.
                  </Card.Text>
                </CardBodyFlex>
              </Card.Body>
              <Card.Footer>


                <div
                  className="text-muted"
                  style={{
                    float: "left",
                    backgroundColor: "#1f1f1f",
                    padding: "8px",
                    borderTopLeftRadius: "20px"

                  }}
                >
                  <small
                    // className="text-muted"
                    style={{
                      color: "white",
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

          <Col xs="12" sm="12" md="6" lg="4">
            <ProductCardElement>
              <Card.Header className="cardHeader-plain">MIDNIGHT - CAW
                <small
                  style={{
                    color: "red",
                    float: "right",
                    fontSize: "14px",
                    paddingTop: "18px",
                    paddingRight: "6px"
                  }}
                >
                  <BsCircleFill />
                </small>
              </Card.Header>
              <Card.Body>
                <CardBodyFlex style={{ display: "flex" }}>
                  <SRLWrapper>
                    <Carousel interval={null}>
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
                  <Card.Title style={{ cursor: "pointer", marginTop: "10px" }}>
                    Artist:
                    <small style={{ color: "grey" }}> Jose Oso</small>
                    <p style={{ float: "right" }}>  Production #  <small style={{ color: "grey" }}> F19G37 </small> </p>

                  </Card.Title>
                  <Card.Text>
                    This uniquely striking rooster is painted onxy black, with
                    notes of dark purple and crimson. Coated in epoxy and burred
                    for ultimate shine and smoothness.
                  </Card.Text>
                </CardBodyFlex>
              </Card.Body>
              <Card.Footer>


                <div
                  className="text-muted"
                  style={{
                    float: "left",
                    backgroundColor: "grey",
                    padding: "8px",
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px"

                  }}
                >
                  <small
                    // className="text-muted"
                    style={{
                      color: "white",
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

          <Col xs="12" sm="12" md="6" lg="4">
            <ProductCardElement>
              <Card.Header className="cardHeader">MIDNIGHT - CAW
                <small
                  style={{
                    color: "black",
                    float: "right",
                    fontSize: "14px",
                    paddingTop: "18px",
                    paddingRight: "6px"
                  }}
                >
                  <BsCircle />
                </small>
              </Card.Header>
              <Card.Body>
                <CardBodyFlex style={{ display: "flex" }}>
                  <SRLWrapper>
                    <Carousel interval={null}>
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
                  <Card.Title style={{ cursor: "pointer", marginTop: "10px" }}>
                    Artist:
                    <small style={{ color: "grey" }}> Jose Oso</small>
                    <p style={{ float: "right" }}>  Production #  <small style={{ color: "grey" }}> F19G37</small> </p>

                  </Card.Title>
                  <Card.Text>
                    This uniquely striking rooster is painted onxy black, with
                    notes of dark purple and crimson. Coated in epoxy and burred
                    for ultimate shine and smoothness.
                  </Card.Text>
                </CardBodyFlex>
              </Card.Body>
              <Card.Footer>


                <div
                  className="text-muted"
                  style={{
                    float: "left",
                    backgroundColor: "gainsboro",
                    padding: "8px",
                    borderTopLeftRadius: "20px",
                    borderBottomRightRadius: "20px"

                  }}
                >
                  <small
                    // className="text-muted"
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
      </ProductCardsContainer>

    </>
  );
};

export default ProductCard;

/*




*/
