import React from "react";
import styled from "styled-components";

// BOOSTRAP
import { Card, Button } from "react-bootstrap";

// IMAGES
import roosterProductA from "../../imgs/product/sculptures/A.png";
import roosterProductB from "../../imgs/product/sculptures/I.png";
import roosterProductC from "../../imgs/product/sculptures/G.png";

// ENTIRE CONTAINER THAT WILL HOLD PRODUCT CARDS
const ProductCardContainer = styled("div")`
  width: 38vw;
  font-size: 20px;
`;

// INDIVIDUAL PRODUCT CARD
const ProductCardElement = styled(Card)`
  min-width: 350px;

  // *? Tie Die Border Design
  border-width: 20px;
  border-image: repeating-radial-gradient(
      circle at -12px,
      grey,
      transparent 2px,
      grey 8px,
      gainsboro 2px
    )
    26;

  -webkit-box-shadow: 0px 5px 35px 9px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 5px 35px 9px rgba(0, 0, 0, 0.27);

  /*     border-width: 12px;
    border-image: repeating-linear-gradient(
                10deg,
                grey 1px,
                grey 1px,
                transparent 5px,
                transparent 5px
            ) 5; */
`;

const CardHeader = styled(Card)`
  & .header {
    background-color: rgba(0, 0, 0, 0.78);
    color: "white";
    font-size: "2rem";
    font-weight: "bold";
    font-family: "menuFont";
  }
`;

const ProductCard = () => {
  return (
    <>
      <div style={{ marginTop: "90px", color: "white" }}>s </div>

      <ProductCardContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "rgba(0,0,0,0.18) 5px solid",
          }}
        >
          <ProductCardElement>
            <Card.Header>MIDNIGHT - CAW</Card.Header>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <div>
                  <Card.Img
                    variant="top"
                    src={roosterProductA}
                    style={{ width: "275px" }}
                  />
                </div>
                <div style={{ borderLeft: "#f2f2f2 2px solid" }}>
                  <div style={{ marginLeft: "4px" }}>
                    <Card.Title style={{ cursor: "pointer" }}>
                      Artist:
                      <small style={{ color: "grey" }}> Jose Suarez Jr.</small>
                    </Card.Title>
                    <Card.Title>
                      Medium: <small style={{ color: "grey" }}>Ceramic</small>{" "}
                    </Card.Title>
                    <Card.Title>
                      Paint: <small style={{ color: "grey" }}> Acrylic</small>
                    </Card.Title>
                    <Card.Title>
                      Batch # :{" "}
                      <small style={{ color: "grey" }}> 47F239K</small>{" "}
                    </Card.Title>
                    <Card.Text>
                      This uniquely striking rooster is painted onxy black, with
                      notes of dark purple and crimson. Coated in epoxy and
                      burred for ultimate shine and smoothness.
                    </Card.Text>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <small
                className="text-muted"
                style={{
                  marginLeft: "50px",
                  marginBottom: "24px",
                  fontSize: "24px",
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
                  fontSize: "26px",
                }}
              >
                Add to Cart
              </Button>
            </Card.Footer>
          </ProductCardElement>
        </div>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;

/* 

  <ProductCardElement style={{ width: "32%" }}>
                    <Card.Header style={{ backgroundColor: "#2f3030", color: "white", fontSize: "2rem", fontWeight: "bold", fontFamily: "menuFont" }}>MAMACITA</Card.Header>
                    <Card.Body>

                        <div style={{ display: "flex" }}>
                            <div>
                                <Card.Img variant="top" src={roosterProductB} style={{ padding: "14px", width: "255px", height:"425px" }} />
                            </div>
                            <div style={{ borderLeft: "#f2f2f2 2px solid" }}>

                                <div style={{ marginLeft: "4px" }}>
                                    <Card.Title style={{ cursor: "pointer" }}>Artist:<small style={{ color: "grey" }}> Jacob Finklestein</small></Card.Title>
                                    <Card.Title>Medium:   <small style={{ color: "grey" }}>Ceramic</small> </Card.Title>
                                    <Card.Title>Paint: <small style={{ color: "grey" }}> Acrylic</small></Card.Title>
                                    <Card.Title>Batch # :  <small style={{ color: "grey" }}> OP251LX</small> </Card.Title>
                                    <Card.Text>
                                        Classic, rural, farm-raised rooster. This sculpture is simple in design but still captures the eyes. 
                                    </Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer >
                        <small className="text-muted" style={{ marginLeft: "50px", marginBottom: "24px", fontSize:"24px" }}>$80.00 </small>
                        <Button variant="success" style={{ marginLeft: "20px", marginBottom: "24px", float: "right", fontSize:"26px" }}>Add to Cart</Button>
                    </Card.Footer>
                </ProductCardElement>

                <ProductCardElement style={{ width: "32%" }}>
                    <Card.Header style={{ backgroundColor: "#2f3030", color: "white", fontSize: "2rem", fontWeight: "bold", fontFamily: "menuFont" }}>Lil' Javi</Card.Header>
                    <Card.Body>

                        <div style={{ display: "flex" }}>
                            <div>
                                <Card.Img variant="top" src={roosterProductC} style={{ padding: "14px", width: "315px", height:"400px" }} />
                            </div>
                            <div style={{ borderLeft: "#f2f2f2 2px solid" }}>

                                <div style={{ marginLeft: "4px" }}>
                                    <Card.Title style={{ cursor: "pointer" }}>Artist:<small style={{ color: "grey" }}> Petr Valichenko.</small></Card.Title>
                                    <Card.Title>Medium:   <small style={{ color: "grey" }}>Ceramic</small> </Card.Title>
                                    <Card.Title>Paint: <small style={{ color: "grey" }}> Acrylic</small></Card.Title>
                                    <Card.Title>Batch # :  <small style={{ color: "grey" }}> PLM21DK</small> </Card.Title>
                                    <Card.Text>
                                       Look at this guy strut his stuff! This two-toned sculpture is sure to capture the envy of your neighbors!
                                    </Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer >
                        <small className="text-muted" style={{ marginLeft: "50px", marginBottom: "24px", fontSize:"24px" }}>$80.00 </small>
                        <Button variant="success" style={{ marginLeft: "20px", marginBottom: "24px", float: "right", fontSize:"26px" }}>Add to Cart</Button>
                    </Card.Footer>
                </ProductCardElement>

*/
