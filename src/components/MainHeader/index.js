// import '../MainHeader/MainHeader.css'
import { useState } from 'react';
import styled from 'styled-components'
// CSS 

import { Button, Navbar, Container } from 'react-bootstrap';
// FONTS

// IMAGES
import rosterLogo from "../../imgs/logo/roosterE.png";


// CSS
const Header = styled(Navbar)`
  color: palevioletred;
  background-color:#4a4a4a; 
  /* background-color: #2e80d1;  */
    
`;

const BrandText = styled('h1')`
    font-family:"brandFont";
    color:white;
    border: white 4.2px dotted;  

`

function MainHeader() {

    return (
        <>
            <Header>
                <BrandText>GALLO-OCHO</BrandText>
            </Header>

        </>


    );
}

export default MainHeader;

