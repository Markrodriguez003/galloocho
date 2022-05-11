import Hero from "..//Hero";
import FrontPageShop from "../FrontPageShop";
import styled from "styled-components";

import { Button, Container } from "react-bootstrap"

// ICONS
import { BsFillArrowRightCircleFill } from "react-icons/bs"

/* SHOP NOW BUTTON LOCATED AT THE BOTTOM */
export const ShopNowButton = styled(Button)`
  background-color: #fafafa;
  color: black;
  font-size: 30px;
  font-family: "menuFont";
  font-weight: bold;
  border: none;
  margin-top: -25px;
  transition: 0.19s linear;

  &:hover {
    background-color: black !important;
 
  }

  /* @media (max-width: 860px) {
    font-size: 2.2em;
  } */
`;


function Home() {
  return (
    <>
      {<Hero />}
      {/* <FrontPageShop /> */}
   
    </>
  );
}

export default Home;
