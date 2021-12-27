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
        <Row>
          <MenuHeaderIcon src={rosterLogo2} />

          <Col>
            <Row>
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
                <FooterAnchor href="#">NEWSLETTER</FooterAnchor>
              </Col>
              <Col lg={12}>
                <FooterAnchor href="#">FUTURE ATTRACTIONS</FooterAnchor>
              </Col>
              <Col lg={12}>
                <FooterAnchor href="#">REFUND POLICY</FooterAnchor>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col>
                {" "}
                <FooterAnchor href="#">CONTACT</FooterAnchor>
              </Col>
              <Col lg={12}>
              
                <FooterAnchor href="#" style={{ fontSize: "18px" }}>
                  <BsFillEnvelopeFill /> email@email.com
                </FooterAnchor>
              </Col>


              <FooterAnchor href="#">ARTISTS WANTED!</FooterAnchor>
              <small
                style={{
                  color: "grey",
                  fontStyle: "italic",
                  marginBottom: "6px",
                }}
              >
                Submit your portfolio to us below!
              </small>

              <Form style={{ width: "400px" }}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Include portfolio and contact info and we'll reach out!"
                  />
                </Form.Group>
              </Form>
            </Row>
          </Col>

          <Col>
            <FooterAnchor href="#">SUBSCRIBE TO OUR NEWSLETTER</FooterAnchor>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
          </Col>
        </Row>
      </Footer>
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
    </>
  );
}

export default MainHeader;
