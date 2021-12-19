// import '../MainHeader/MainHeader.css'
import { useState } from 'react';
import styled from 'styled-components'
// CSS 

import { Button, Navbar, Container, Offcanvas, Form } from 'react-bootstrap';
// FONTS

// IMAGES
import rosterLogo2 from "../../imgs/logo/roosterE.png";
// ICONS
import {
    BsFillArrowRightCircleFill,
    BsFillCartFill,
    BsFacebook,
    BsInstagram,
    BsYoutube,
    BsFillEnvelopeFill,
    BsTwitter,
    BsFillQuestionCircleFill,
    BsFillBagXFill,
    BsFillBagCheckFill,
    BsXOctagonFill,
    BsFillBagPlusFill
} from "react-icons/bs";


// CSS
const Footer = styled(Navbar)`
 display: flex;
 position:"relative";
  background-color:#2f3030;
  padding: 33px;
  position: relative;
  left: 0;
  bottom: 0;
  margin-left:auto;
  margin-right:auto;
  text-align:"center";
  align-content:"center";
  justify-content:"center";
  align-items:"center";

`;

const FooterAnchor = styled('a')`
text-decoration: none;
  color: white;
  font-size: 28px;
  padding-top: 10.5px;
  -webkit-transition: all 0.5s ease; /* Safari and Chrome */
    -moz-transition: all 0.5s ease; /* Firefox */
    -ms-transition: all 0.5s ease; /* IE 9 */
    -o-transition: all 0.5s ease; /* Opera */
    transition: all 0.5s ease;
  

  &:hover {
  /* color: lightpink; */
  color: #fc6a6a;
   
  }
`

const SocialMediaBar = styled("div")`
  color: white;
  /* background-color:red; */
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin-top: 16px;
`;

const SocialMediaItem = styled("a")`
  text-decoration: none;
  padding: 12px;
  font-size: 30px;
  color: white;
  /* -webkit-transition: all 0.3s ease;  
    -moz-transition: all 0.3s ease;  
    -ms-transition: all 0.3s ease;  
    -o-transition: all 0.3s ease;  
    transition: all 0.3s ease; */
  &:hover {
  /* color: lightpink; */
  color: #fc6a6a;
  /* font-size: 38px; */
}
`;

const MenuHeaderIcon = styled("img")`
  width: 160px;
  height: 195px;
  background-color: transparent;
  color: white;
  padding: 4px;
  margin-top: 40px;
  margin-left: 130px;
  margin-right: 45px;
  margin-bottom: 8px;
`;

const SmallText = styled('small')`
color:"grey";
background-color:#2f3030;
text-align:"center";
padding:22px;


`

function MainHeader() {

    return (
        <>
            {/* <ContentContainer></ContentContainer> */}
            <Footer >

                <MenuHeaderIcon src={rosterLogo2} />

                <div style={{ display: "flex", flexDirection: "column", marginLeft: "44px" }}>
                    <FooterAnchor href="#">HOME</FooterAnchor>
                    <FooterAnchor href="#">SHOP</FooterAnchor>
                    <FooterAnchor href="#">ARTISTS</FooterAnchor>
                    <FooterAnchor href="#">NEWSLETTER</FooterAnchor>
                    <FooterAnchor href="#">FUTURE ATTRACTIONS</FooterAnchor>
                    <FooterAnchor href="#">REFUND POLICY</FooterAnchor>
                </div>

                <div style={{ display: "flex", flexDirection: "column", marginLeft: "84px" }}>
                    <FooterAnchor href="#">CONTACT</FooterAnchor>
                    <FooterAnchor href="#" style={{ fontSize: "18px", }}><  BsFillEnvelopeFill/> email@email.com</FooterAnchor>
                    <FooterAnchor href="#">ARTISTS WANTED!</FooterAnchor>
                    <small style={{ color: "grey", fontStyle: "italic", marginBottom: "6px" }}>Submit your portfolio to us below!</small>

                    <Form style={{ width: "400px" }}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Include portfolio and contact info and we'll reach out!" />
                        </Form.Group>
                    </Form>
                </div>

                <div style={{ display: "flex", flexDirection: "column", marginLeft: "84px" }}>
                    <FooterAnchor href="#">SUBSCRIBE TO OUR NEWSLETTER</FooterAnchor>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Form>
                    <SocialMediaBar>
                        <SocialMediaItem href="#">
                            <BsFacebook />
                        </SocialMediaItem>
                        <SocialMediaItem href="#">
                            {" "}
                            <BsInstagram />
                        </SocialMediaItem>
                        <SocialMediaItem href="#">
                            {" "}
                            <BsYoutube />
                        </SocialMediaItem>
                        <SocialMediaItem href="#">
                            {" "}
                            <BsFillEnvelopeFill />
                        </SocialMediaItem>
                        <SocialMediaItem href="#">
                            {" "}
                            <BsTwitter />
                        </SocialMediaItem>
                    </SocialMediaBar>

                </div>


            </Footer>
            <SmallText style={{ display: "block", textAlign: "center", color: "white", fontSize:"12px" }}>© [name of rightsholder or rightsholders] [publication year]: e.g.  © XYZ Press and contributors 2014

                [date of terms of use]

                Except as permitted by the copyright law applicable to you, you may not reproduce or communicate any of the content on this website, including files downloadable from this website, without the permission of the copyright owner.

                The Australian Copyright Act allows certain uses of content from the internet without the copyright owner’s permission. This includes uses by educational institutions and by Commonwealth and State governments, provided fair compensation is paid. For more information, see www.copyright.com.au and www.copyright.org.au.

                The owners of copyright in the content on this website may receive compensation for the use of their content by educational institutions and governments, including from licensing schemes managed by Copyright Agency.

                We may change these terms of use from time to time. Check before re-using any content from this website.</SmallText>
        </>


    );
}

export default MainHeader;

