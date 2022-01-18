import styled, { css } from "styled-components";
import { Card, Button } from "react-bootstrap";

// ENTIRE CONTAINER THAT WILL HOLD PRODUCT CARDS
export const ProductCardsContainer = styled("div")`
  display: block;
  position:relative;
  margin-top: 5px;
 margin-left: auto;
 margin-right: auto; 
 overflow: hidden; 
 
 
`;

// INDIVIDUAL PRODUCT CARD
export const ProductCardElement = styled(Card)`
  position: relative !important;
  background-color: transparent !important ;
  margin-bottom: 10px;
  width: 33%; // This was added to make it a solo centered card. Take out when creating grid
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 220px;
  margin-top: 40px;
  border: white 2px solid !important; 
  /* -webkit-box-shadow: 4px 4px 45px -12px rgba(0,0,0,0.45); 
  box-shadow: 4px 4px 45px -12px rgba(0,0,0,0.45); */

  -webkit-box-shadow: 1px 3px 47px -18px rgba(0,0,0,0.7); 
box-shadow: 1px 3px 47px -18px rgba(0,0,0,0.7);
 

`;

// CONTAINER FOR CARD BODY - FLEX - COL
export const CardBodyFlex = styled("div")`
  display: flex;
  flex-direction: column; // This should modulate when screen shrinks
  margin-top: "20px";
`;
export const CardFooterFlex = styled("div")`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  width: 100% !important;
`;

export const ProductHeaderTitle = styled('img')`
width: 300px;
height: auto;
text-align:center;


`
