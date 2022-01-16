// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import styled from "styled-components";
// CSS

import { Form, Row, Col } from "react-bootstrap";
import {
  Footer,
  FooterAnchor,
  SocialMediaBar,
  SocialMediaItem,
  MenuHeaderIcon,
  SmallText,
} from "./design";

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
  BsFillBagPlusFill,
} from "react-icons/bs";

function MainHeader() {
  return (
    <>
      <Footer>
        {/* <Col lg={12}>
            <MenuHeaderIcon src={rosterLogo2} />
          </Col> */}

        <Row>

          <Col lg={4}>
            <Row>
              <p style={{
                color: "white",
                fontSize: "20px",
              }}>________________________</p>
              <Col lg={12}>
                <FooterAnchor href="#">HOME</FooterAnchor>
              </Col>
              <Col lg={12}>
                <FooterAnchor href="#">SHOP</FooterAnchor>
              </Col>
              <Col lg={12}>
                <FooterAnchor href="#">ARTISTS</FooterAnchor>
              </Col>
              <Col lg={12}>
                <FooterAnchor href="#">NEWS</FooterAnchor>
              </Col>
              <Col lg={12}>
                <FooterAnchor href="#">ABOUT</FooterAnchor>
              </Col>
              <Col lg={12}>
                <FooterAnchor href="#">FUTURE PROJECTS</FooterAnchor>
              </Col>
              <Col lg={12}>
                <FooterAnchor href="#">REFUND POLICY</FooterAnchor>
              </Col>
            </Row>
          </Col>


          <Col lg={4}>
            <Row>
              <p style={{
                color: "white",
                fontSize: "20px",
              }}>________________________</p>
              <Col lg={12}>
                <FooterAnchor href="#">CONTACT</FooterAnchor>
              </Col>
              <Col lg={12} style={{ marginBottom: "10px" }}>

                <FooterAnchor href="#" style={{ fontSize: "18px", textAlign: "center" }}>
                  <BsFillEnvelopeFill /> <small>support@Galloocho.com</small>
                </FooterAnchor>

              </Col>
              <Col>
                <FooterAnchor href="#">ARTISTS WANTED!</FooterAnchor>
              </Col>
            </Row>
            <Col>
              <FooterAnchor href="#">INVESTOR PORTAL</FooterAnchor>
            </Col>
            <Col>
              <FooterAnchor href="#">NFT</FooterAnchor>
            </Col>
            <Col>
              <FooterAnchor href="#">SUPPORT</FooterAnchor>
            </Col>
          </Col>




          <Col lg={4}>
            <p style={{
              color: "white",
              fontSize: "20px",
            }}>________________________</p>
            <FooterAnchor href="#">SUBSCRIBE TO OUR NEWSLETTER</FooterAnchor>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control style={{
                  width: "285px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }} type="email" placeholder="name@example.com" />
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
          </Col>
          <Col lg={12}>
           
            <SmallText
              style={{
                display: "block",
                textAlign: "center",
                color: "white",
                fontSize: "12px",
              }}
            >
              © [name of rightsholder or rightsholders] [publication year]: e.g. © XYZ
              Press and contributors 2014 [date of terms of use] Except as permitted
              by the copyright law applicable to you, you may not reproduce or
              communicate any of the content on this website, including files
              downloadable from this website, without the permission of the copyright
              owner. The Australian Copyright Act allows certain uses of content from
              the internet without the copyright owner’s permission. This includes
              uses by educational institutions and by Commonwealth and State
              governments, provided fair compensation is paid. For more information,
              see www.copyright.com.au and www.copyright.org.au. The owners of
              copyright in the content on this website may receive compensation for
              the use of their content by educational institutions and governments,
              including from licensing schemes managed by Copyright Agency. We may
              change these terms of use from time to time. Check before re-using any
              content from this website.
            </SmallText>
          </Col>
        </Row>
      </Footer>




    </>
  );
}

export default MainHeader;
