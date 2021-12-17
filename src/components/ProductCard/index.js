import React from 'react';
import styled from "styled-components";

// BOOSTRAP
import { Card, Button } from 'react-bootstrap';

// IMAGES
import roosterProductA from "../../imgs/product/818gmQ2WeIS._AC_SL1500_.jpg"


// ENTIRE CONTAINER THAT WILL HOLD PRODUCT CARDS
const ProductCardContainer = styled('div')`
    /* width: 325px;
    height: 400px; */
`

// INDIVIDUAL PRODUCT CARD
const ProductCardElement = styled(Card)`
min-width: 350px;


// *? Top Corner Borders Design*/
background:
    /* linear-gradient(to right, #f2f2f2 4px, transparent 4px) 0 100%,
    linear-gradient(to left, #f2f2f2 4px, transparent 4px) 100% 0,
    linear-gradient(to bottom, #f2f2f2 4px, transparent 4px) 100% 0,
    linear-gradient(to top, #f2f2f2 4px, transparent 4px) 0 100%;
    background-repeat: no-repeat;
    background-size: 20px 20px; */

// *? Tie Die Border Design
	border: 8px solid;
    border-width: 20px;
    border-image: repeating-radial-gradient(
			circle at 10px,
			turquoise,
			pink 2px,
			greenyellow 4px,
			pink 2px
		) 1;

// *?  Transparent Border edge border 
  /* box-shadow:
    -50px -50px 0 -40px #f2f2f2,
    50px 50px 0 -40px #f2f2f2; */
`

const ProductCard = () => {
    return (
 
            <ProductCardContainer style={{backgroundColor:"skyblue"}}>

                <ProductCardElement style={{width:"35%"}}>
                    <Card.Header style={{ backgroundColor: "yellowgreen",  color: "white", fontSize: "2rem", fontWeight: "bold", fontFamily: "menuFont" }}>Lil' Javi</Card.Header>
                    <Card.Body>

                        <div style={{ display: "flex" }}>
                            <div>
                                <Card.Img variant="top" src={roosterProductA} style={{ padding: "14px", width:"275px" }} />
                            </div>
                            <div style={{ borderLeft: "#f2f2f2 2px solid" }}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                               
                            </div>

                        </div>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago  </small>
                            <Button variant="primary">Purchase</Button>
                        </Card.Footer>
                    </Card.Body>
                </ProductCardElement>


            </ProductCardContainer>
  
    );
};





export default ProductCard;
