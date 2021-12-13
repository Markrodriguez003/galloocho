// import '../MainHeader/MainHeader.css'
import { useState } from 'react';
import styled from 'styled-components'
// CSS 

import { Button, Navbar, Container, Offcanvas } from 'react-bootstrap';
// FONTS

// IMAGES
import rosterLogo from "../../imgs/logo/roosterE.png";


// CSS
const Header = styled(Navbar)`
 display: flex;
 justify-content: space-between;
  color: palevioletred;
  /* background-color:#4a4a4a;  */
  background-color:#2f3030;
; 
  /* background-color: #2e80d1;  */
  /* margin: 10px; */
  padding: 13px;
 
  position: relative;
  left: 0;
  bottom: 0;
    
`;

const ContentContainer = styled('div')`
 min-height: calc(100vh - 34px);
 background-color:red;
 `

const Menu = styled('h1')`
  color: white;
  background-color:transparent; 
  cursor: pointer;
  text-decoration:none;   
  font-family:"menuFont";
  font-size: 42px;
  margin-left: 6px;
`;

const BrandLink = styled('a')`
text-decoration: none;
`
const BrandText = styled('h1')`
    font-family:"brandFont";
    color:white;
    letter-spacing: 2.5px;
    border: white 4.2px dotted;  
    padding: 6px 6px 0px 6px;
    margin-right: 6px;
    margin-top: 4px;
    font-size: 46px;
`

function MainHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <ContentContainer></ContentContainer>
            <Header >
                {/* Maybe put a menu Icon - Roster's Head at the end of the "Menu" Left btton */}
                <Menu onClick={handleShow}>Menu</Menu>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
                <BrandLink href="https://www.nhl.com/"><BrandText>GALLO-OCHO</BrandText></BrandLink>
            </Header>

        </>


    );
}

export default MainHeader;

