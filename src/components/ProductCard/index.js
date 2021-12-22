import React from 'react';
import styled from "styled-components";

// BOOSTRAP
import { Card, Button } from 'react-bootstrap';

// IMAGES
import roosterProductA from "../../imgs/product/sculptures/A.png"
import roosterProductB from "../../imgs/product/sculptures/I.png"
import roosterProductC from "../../imgs/product/sculptures/G.png"
 

// ENTIRE CONTAINER THAT WILL HOLD PRODUCT CARDS
const ProductCardContainer = styled('div')`
    /* width: 325px;
    height: 400px; */
    /* font-family:"cardFont" */
    font-size: 20px;
 

`

// INDIVIDUAL PRODUCT CARD
const ProductCardElement = styled(Card)`
min-width: 350px;
margin-left: 15px;
 


// *? Top Corner Borders Design*/
 /*background:
     linear-gradient(to right, #f2f2f2 4px, transparent 4px) 0 100%,
    linear-gradient(to left, #f2f2f2 4px, transparent 4px) 100% 0,
    linear-gradient(to bottom, #f2f2f2 4px, transparent 4px) 100% 0,
    linear-gradient(to top, #f2f2f2 4px, transparent 4px) 0 100%;
    background-repeat: no-repeat;
    background-size: 20px 20px; */

// *? Tie Die Border Design
	/* border: 8px solid;
    border-width: 20px;
    border-image: repeating-radial-gradient(
			circle at 10px,
			turquoise,
			pink 2px,
			greenyellow 4px,
			pink 2px
		) 1; */

    border: 8px solid;
    border-width: 6px;
    border-image: repeating-linear-gradient(
                10deg,
                grey 1px,
                grey 1px,
                transparent 5px,
                transparent 5px
            ) 5;

      

// *?  Transparent Border edge border 
  /* box-shadow:
    -50px -50px 0 -40px #f2f2f2,
    50px 50px 0 -40px #f2f2f2; */
`

const ProductCard = () => {
    return (
<>


        <ProductCardContainer style={{ backgroundColor: "transparent", marginTop: "40px" }}>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>



                <ProductCardElement style={{ width: "32%", }}>
                    <Card.Header style={{ backgroundColor: "#2f3030", color: "white", fontSize: "2rem", fontWeight: "bold", fontFamily: "menuFont" }}>MIDNIGHT - CAW</Card.Header>
                    <Card.Body>

                        <div style={{ display: "flex" }}>
                            <div>
                                <Card.Img variant="top" src={roosterProductA} style={{ padding: "14px", width: "275px" }} />
                            </div>
                            <div style={{ borderLeft: "#f2f2f2 2px solid" }}>

                                <div style={{ marginLeft: "4px" }}>
                                    <Card.Title style={{ cursor: "pointer" }}>Artist:<small style={{ color: "grey" }}> Jose Suarez Jr.</small></Card.Title>
                                    <Card.Title>Medium:   <small style={{ color: "grey" }}>Ceramic</small> </Card.Title>
                                    <Card.Title>Paint: <small style={{ color: "grey" }}> Acrylic</small></Card.Title>
                                    <Card.Title>Batch # :  <small style={{ color: "grey" }}> 47F239K</small> </Card.Title>
                                    <Card.Text>
                                        This uniquely striking rooster is painted onxy black, with notes of dark purple and crimson. Coated in epoxy and burred for ultimate shine and smoothness. 
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
            </div>

        </ProductCardContainer>
    </>

    );
};





export default ProductCard;


/* 



*/